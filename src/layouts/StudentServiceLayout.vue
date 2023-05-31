<template>
  <service-navbar />

  <main>
    <section class="relative w-full h-full min-h-screen py-16">
      <div>
        <main class="profile-page custom">
          <section class="relative block h-500-px">
            <div
              class="absolute top-0 w-full h-full bg-center bg-cover"
              :style="`background-image: url('${bgupdate}');`"
            >
              <span
                id="blackOverlay"
                class="absolute w-full h-full bg-black opacity-50"
              ></span>
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden pointer-events-none h-70-px"
              style="transform: translateZ(0)"
            >
              <svg
                class="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  class="fill-current text-blueGray-200"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>

          <section class="relative pt-16 bg-blueGray-200">
            <div class="container mx-auto">
              <div class="flex flex-wrap">
                <div
                  class="cssanimation sequence fadeInBottom relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words rounded-lg shadow-xl bg-blueGray-800 lg:w-12/12"
                >
                  <div class="px-6">
                    <div class="flex flex-wrap text-center lg:text-left">
                      <div
                        class="relative w-full px-6 lg:w-4/12 cssanimation sequence fadeInBottom"
                      >
                        <div class="relative text-center">
                          <img
                            alt="image profile"
                            v-if="imgUrl"
                            :src="imgUrl"
                            class="-mt-20 bg-white cropped-profile border-2 rounded-full shadow-lg h-200-px center-img max-w-200-px"
                          />
                        </div>
                        <div class="relative px-3 py-6 mt-2 text-center">
                          <router-link
                            to="/student/service/profile"
                            class="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          >
                            แก้ไขโปรไฟล์
                          </router-link>
                        </div>
                      </div>
                      <div
                        class="relative w-full lg:w-4/12 cssanimation sequence fadeInBottom"
                      >
                        <div class="flex py-4 pt-6">
                          <div class="py-3 border-l-2 text-center lg:text-left">
                            <h3
                              class="ml-3 mb-3 text-lg font-normal leading-normal text-blueGray-100"
                            >
                              รหัสนักศึกษา : {{ this.studentID }}
                            </h3>
                            <h3
                              class="ml-3 mb-2 text-4xl font-semibold leading-normal text-blueGray-100"
                            >
                              {{ this.first_name }} {{ this.last_name }}
                            </h3>
                            <h3
                              class="ml-3 mb-2 text-2xl font-semibold leading-normal text-blueGray-100"
                            >
                              {{ this.first_nameEn }} {{ this.last_nameEn }}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div
                        class="relative w-full px-6 lg:w-4/12 cssanimation sequence fadeInBottom"
                      >
                        <div class="flex justify-center py-4 pt-4">
                          <div
                            class="p-3 mt-4 text-left border-2 rounded-lg shadow-lg bg-blueGray-100 border-blueGray-300"
                          >
                            <h3
                              class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
                            >
                              ข้อมูลการติดต่อ
                            </h3>
                            <div
                              class="py-1 border-t border-blueGray-300"
                            ></div>
                            <p
                              class="mb-2 font-normal leading-normal text-md text-blueGray-700"
                            >
                              เบอร์โทร : {{ this.phone }}
                            </p>
                            <p
                              class="mb-2 font-normal leading-normal text-md text-blueGray-700"
                            >
                              E-mail : {{ this.email }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>

      <auth-footer absolute />
    </section>
  </main>
</template>

<script>
//? Component
import AuthFooter from "@/components/footers/AuthFooter.vue";
import ServiceNavbar from "@/components/navbars/ServiceNavbar.vue";
//? Images
import team from "@/assets/images/user_null.svg";
import bgupdate from "@/assets/images/bg-update.jpg";
//? API
import http from "@/services/WebpageService";
export default {
  components: {
    AuthFooter,
    ServiceNavbar,
  },
  data() {
    return {
      bgupdate,
      team,
      studentID: "",
      first_name: "",
      last_name: "",
      first_nameEn: "",
      last_nameEn: "",
      email: "",
      phone: "",
      imgUrl: "",
    };
  },

  mounted() {
    this.ShowProfile();
  },

  methods: {
    async ShowProfile() {
      let local_user = JSON.parse(window.localStorage.getItem("user"));

      if (local_user) {
        let email_cut = local_user.email;
        let studentID = email_cut.slice(3, 13);
        let csStudent = studentID.substring(3, 6);
        let citizenId = local_user.card_id;

        //? Check Student ID => ComSci 410
        if (csStudent == "410") {
          try {
            let student = await http.get(
              `student/search/citizen-id/${citizenId}`
            );
            if (student.data.success) {
              let data = student.data.data;
              this.studentID = data.student_code;

              let name = data.name_th.split(" ");
              this.first_name = name[0];
              this.last_name = name[1];

              let nameEn = data.name_en.split(" ");
              this.first_nameEn = nameEn[0];
              this.last_nameEn = nameEn[1];

              this.email = data.email;

              //? Format phone number
              let phone = data.tel_number;
              let phone_format =
                phone.substring(0, 3) +
                "-" +
                phone.substring(3, 7) +
                "-" +
                phone.substring(7, 10);
              this.phone = phone_format;

              if (data.image_profile != null) {
                this.imgUrl = data.image_profile;
              } else {
                this.imgUrl = this.team;
              }
            } else {
              //! Not found user
              this.studentID = studentID;
              this.first_name = local_user.name;
              this.last_name = local_user.surname;
              this.email = local_user.email;

              //? Format phone number
              let phone = local_user.mobile;
              let phone_format =
                phone.substring(0, 3) +
                "-" +
                phone.substring(3, 6) +
                "-" +
                phone.substring(6, 10);
              this.phone = phone_format;
              this.imgUrl = this.team;
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          const Toast = this.$swal.mixin({
            position: "center",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "error",
            title: "ขออภัย คุณไม่มีสิทธิ์เข้าใช้งานระบบนี้",
          }).then(() => {
            localStorage.removeItem("user");
            localStorage.removeItem("permission");
            this.$router.push({ name: "Login" });
          });
        }
      }
    },
  },
};
</script>
