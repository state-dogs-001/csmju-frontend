<template>
  <main class="profile-page custom">
    <section class="relative pb-16 bg-blueGray-200">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div
            class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
          >
            <div class="px-6 mt-6">
              <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                <div class="w-full lg:w-3/12">
                  <div class="mr-4 text-center rounded-lg bg-emerald-500">
                    <h3
                      class="text-6xl font-semibold leading-normal text-white"
                    >
                      Profile
                    </h3>
                  </div>
                </div>
                <div class="w-full lg:w-6/12">
                  <h3 class="mt-1 text-2xl font-semibold">
                    แก้ไขข้อมูลส่วนตัวผู้ใช้งาน
                  </h3>

                  <h3 class="text-xl font-normal">| Edit your profile</h3>
                </div>
                <div class="w-full lg:w-3/12">
                  <div class="mt-4 text-right">
                    <router-link
                      to="/personnel/service"
                      class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    >
                      ย้อนกลับ
                    </router-link>
                  </div>
                </div>
              </div>

              <form @submit.stop.prevent="EditProfile">
                <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <!-- from input -->
                    <div class="w-full lg:w-6/12 pr-4">
                      <div class="mb-8">
                        <div class="relative text-center px-2">
                          <img
                            alt="image profile"
                            v-if="imgUrl"
                            :src="imgUrl"
                            class="mt-0 rounded-full shadow-lg h-200-px center-img max-w-200-px cropped bg-emerald-500"
                          />
                          <div class="text-left">
                            <label
                              class="block mt-4 my-3 text-gray-700 text-md"
                              for="image"
                              >อัปโหลดรูปโปรไฟล์
                              <span class="text-red-500 text-xs"
                                >(ไฟล์ที่อัปโหลดขนาดต้องไม่เกิน 8MB)</span
                              ></label
                            >
                            <input
                              ref="fileupload"
                              type="file"
                              @change="onFileSelected"
                              class="px-3 py-2 leading-tight text-gray-700 border w-full"
                            />
                            <div
                              v-if="v$.file.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.file.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <label
                            class="block my-3 mb-4 text-blueGray-500 text-md border-b font-semibold"
                            for="Title"
                            >ข้อมูลส่วนตัว (Personal Infomation)</label
                          >
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >รหัสประจำตัวประชาชน</label
                          >
                          <input
                            v-model="citizenId"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 bg-blueGray-200"
                            type="text"
                            placeholder="ID"
                            readonly
                          />
                          <div
                            v-if="v$.citizenId.$error"
                            class="mt-0 text-sm text-red-500"
                          >
                            {{ v$.citizenId.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Name title -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-4/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >คำนำหน้าชื่อ (ภาษาไทย)</label
                          >
                          <input
                            v-model="nameTitle"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                            type="text"
                            placeholder="Name title"
                          />
                          <div
                            v-if="v$.nameTitle.$error"
                            class="mt-0 text-sm text-red-500"
                          >
                            {{ v$.nameTitle.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Name thai -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >ชื่อ (ภาษาไทย)</label
                          >
                          <input
                            v-model="firstName"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                            type="text"
                            placeholder="Firstname"
                          />
                          <div
                            v-if="v$.firstName.$error"
                            class="mt-0 text-sm text-red-500"
                          >
                            {{ v$.firstName.$errors[0].$message }}
                          </div>
                        </div>
                        <div class="w-full px-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >นามสกุล (ภาษาไทย)</label
                          >
                          <input
                            v-model="lastName"
                            class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700"
                            type="text"
                            placeholder="Lastname"
                          />
                          <div
                            v-if="v$.lastName.$error"
                            class="mt-0 text-sm text-red-500"
                          >
                            {{ v$.lastName.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Name English -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >ชื่อ (ภาษาอังกฤษ)</label
                          >
                          <input
                            v-model="firstNameEn"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                            type="text"
                            placeholder="Firstname (English)"
                          />
                          <div
                            v-if="v$.firstNameEn.$error"
                            class="mt-0 text-sm text-red-500"
                          >
                            {{ v$.firstNameEn.$errors[0].$message }}
                          </div>
                        </div>
                        <div class="w-full px-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Title"
                            >นามสกุล (ภาษาอังกฤษ)</label
                          >
                          <input
                            v-model="lastNameEn"
                            class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700"
                            type="text"
                            placeholder="Lastname (English)"
                          />
                          <div
                            v-if="v$.lastNameEn.$error"
                            class="mt-0 text-sm text-red-500"
                          >
                            {{ v$.lastNameEn.$errors[0].$message }}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="w-full mt-2 lg:w-6/12">
                      <div class="border-l pr-2 pl-4">
                        <!-- Position -->
                        <div
                          class="block my-3 mb-4 text-blueGray-500 text-md border-b font-semibold"
                          for="Title"
                        >
                          ตำแหน่ง (Position)
                        </div>

                        <!-- Position academic -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ตำแหน่งทางวิชาการ</label
                            >
                            <input
                              v-model="positionAcademic"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Position of Education"
                            />
                            <div
                              v-if="v$.positionAcademic.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.positionAcademic.$errors[0].$message }}
                            </div>
                          </div>
                        </div>

                        <!-- Position Manager -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ตำแหน่งทางการบริหาร</label
                            >
                            <input
                              v-model="positionManager"
                              class="w-full px-3 bg-blueGray-200 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Position of Administration"
                              readonly
                            />
                          </div>
                        </div>

                        <!-- Education -->
                        <div
                          class="block my-3 mt-3 mb-4 text-blueGray-500 text-md border-b font-semibold"
                          for="Title"
                        >
                          การศึกษา (Graduate)
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4">
                            <label class="block my-3 text-gray-700 text-md"
                              >วุฒิการศึกษาปัจจุบัน
                            </label>
                            <textarea
                              v-model="education"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              rows="5"
                              placeholder="Education"
                            />
                            <div
                              v-if="v$.education.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.education.$errors[0].$message }}
                            </div>
                          </div>
                        </div>

                        <!-- Contact -->
                        <div
                          class="block my-3 mt-3 mb-4 text-blueGray-500 text-md border-b font-semibold"
                          for="Title"
                        >
                          การติดต่อ (Contact)
                        </div>
                        <div class="flex flex-wrap mb-4">
                          <!-- Phone -->
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >เบอร์ติดต่อ</label
                            >
                            <input
                              v-model="phone"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Tel."
                            />
                            <div
                              v-if="v$.phone.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.phone.$errors[0].$message }}
                            </div>
                          </div>

                          <!-- Email -->
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อีเมล</label
                            >
                            <input
                              v-model="email"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Email"
                            />
                            <div
                              v-if="v$.email.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.email.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Button submit -->
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 pr-4">
                      <div class="mt-4 p-4 text-center">
                        <button
                          class="px-6 py-3 mb-1 mx-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="submit"
                        >
                          บันทึก
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
//? API
import http from "@/services/WebpageService";
//? Package
import useValidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  numeric,
  helpers,
} from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),

      //? Form
      id: "",
      citizenId: "",
      nameTitle: "",
      firstName: "",
      lastName: "",
      firstNameEn: "",
      lastNameEn: "",
      positionAcademic: "",
      positionManager: "",
      education: "",
      email: "",
      phone: "",
      imgUrl: "",
      file: null,

      //? Not show on page use for update
      workStatus: "",
      personnelType: "",
      academicType: "",
    };
  },

  mounted() {
    this.ShowProfile();
  },

  methods: {
    //? On upload file
    onFileSelected(event) {
      //? Set default SweetAlert2
      const Swal = this.$swal.mixin({
        position: "center",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        customClass: {
          title: "font-semibold custom text-blueGray-600",
        },
      });

      this.file = event.target.files[0];

      let size = this.file?.size / 10 ** 6;
      if (size > 8) {
        Swal.fire({
          icon: "error",
          title: "ไฟล์ที่อัปโหลดต้องมีขนาดไม่เกิน 8MB",
        }).then(() => {
          //? Reset
          this.file = null;
          this.imgUrl = "";
          this.$refs.fileupload.value = "";
        });
        return;
      }

      this.imgUrl = URL.createObjectURL(this.file);
    },

    async ShowProfile() {
      try {
        let local = JSON.parse(window.localStorage.getItem("user"));
        let citizenId = local.card_id;
        const res = await http.get(`personnel/search/citizen-id/${citizenId}`);
        if (res.data.success) {
          let data = res.data.data;
          this.id = data.id;
          this.citizenId = data.citizen_id;
          this.nameTitle = data.name_title;
          let name = data.name_th.split(" ");
          this.firstName = name[0];
          this.lastName = name[1];
          let nameEn = data.name_en.split(" ");
          this.firstNameEn = nameEn[0];
          this.lastNameEn = nameEn[1];
          this.positionAcademic = data.position_academic;
          this.positionManager = data.position_manager;
          this.education = data.education;
          this.email = data.email;
          this.phone = data.tel_number;
          this.workStatus = data.status_id;
          this.personnelType = data.personnel_type;
          this.academicType = data.academic_type;
        }
      } catch (err) {
        console.log(err);
      }
    },

    //? Update profile
    EditProfile() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let data = new FormData();
        data.append("citizen_id", this.citizenId);
        data.append("name_title", this.nameTitle);
        let nameTh = this.firstName + " " + this.lastName;
        data.append("name_th", nameTh);
        let nameEn = this.firstNameEn + " " + this.lastNameEn;
        data.append("name_en", nameEn);
        data.append("position_academic", this.positionAcademic);
        data.append("education", this.education);
        data.append("email", this.email);
        data.append("tel_number", this.phone);
        data.append("work_status", this.workStatus);
        data.append("personnel_type", this.personnelType);
        data.append("academic_type", this.academicType);

        this.positionManager
          ? data.append("position_manager", this.positionManager)
          : data.append("position_manager", "");

        if (this.file !== null) {
          data.append("image_profile", this.file);
        }

        //? Set sweet alert
        const Swal = this.$swal.mixin({
          position: "center",
          showConfirmButton: true,
          customClass: {
            title: "font-weight-bold custom",
            confirmButton:
              "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
            cancelButton:
              "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          },
          buttonsStyling: false,
        });

        //? Update Profile
        http
          .post(`personnel/update/${this.id}`, data)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: `แก้ไขข้อมูลเรียบร้อย`,
            }).then(() => {
              this.$router.push({ name: "PersonnelService" });
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: `ไม่สามารถแก้ไขข้อมูลได้`,
              text: error.response.data.message,
            }).then(() => {
              window.location.reload();
            });
          });
      }
    },
  },

  validations() {
    return {
      citizenId: {
        required: helpers.withMessage("กรุณากรอกเลขบัตรประชาชน", required),
        minLength: helpers.withMessage(
          "กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก",
          minLength(13)
        ),
        numeric: helpers.withMessage(
          "กรุณากรอกเลขบัตรประชาชนเป็นตัวเลขเท่านั้น",
          numeric
        ),
      },
      nameTitle: {
        required: helpers.withMessage("กรุณากรอกคำนำหน้าชื่อ", required),
      },
      firstName: {
        required: helpers.withMessage("กรุณากรอกชื่อภาษาไทย", required),
      },
      lastName: {
        required: helpers.withMessage("กรุณากรอกนามสกุลภาษาไทย", required),
      },
      firstNameEn: {
        required: helpers.withMessage("กรุณากรอกชื่อภาษาอังกฤษ", required),
      },
      lastNameEn: {
        required: helpers.withMessage("กรุณากรอกนามสกุลภาษาอังกฤษ", required),
      },
      positionAcademic: {
        required: helpers.withMessage("กรุณากรอกตำแหน่งวิชาการ", required),
      },
      education: {
        required: helpers.withMessage("กรุณากรอกวุฒิการศึกษา", required),
      },
      email: {
        required: helpers.withMessage("กรุณากรอกอีเมล", required),
        email: helpers.withMessage("กรุณากรอกอีเมลให้ถูกต้อง", email),
      },
      phone: {
        required: helpers.withMessage("กรุณากรอกเบอร์โทรศัพท์", required),
      },
      file: {
        required: helpers.withMessage(
          "ไฟล์ที่อัปโหลดต้องเป็นไฟล์ .jpeg .jpg หรือ .png เท่านั้น",
          () => {
            if (this.file != null) {
              //? Check file type
              if (
                this.file.type == "image/jpeg" ||
                this.file.type == "image/jpg" ||
                this.file.type == "image/png"
              ) {
                return true;
              } else {
                return false;
              }
            } else {
              return true;
            }
          }
        ),
      },
    };
  },
};
</script>
