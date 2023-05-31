<template>
  <div class="container px-4 mx-auto">
    <div
      class="flex flex-col w-full min-h-screen-50 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6 py-4">
        <div class="flex flex-wrap">
          <div class="w-full lg:w-2/12">
            <img
              :src="image"
              alt="Image profile"
              class="mt-2 rounded-full center-img shadow-lg max-w-100-px h-100-px bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-4/12 text-center lg:text-left py-4">
            <p class="font-normal text-xl text-blueGray-800">
              {{ nameTitle }}{{ nameTh }} {{ lastNameTh }}
            </p>
            <p class="font-semibold text-lg text-blueGray-800">
              {{ nameEn }} {{ lastNameEn }}
            </p>
            <p class="font-semibold text-blueGray-800">
              {{ position }}
            </p>
          </div>
          <div
            class="w-full py-2 px-4 mt-2 lg:w-6/12 md:border-l text-center lg:text-left"
          >
            <div class="text-sm text-blueGray-400">
              <span>{{ workplace }}&nbsp;</span>
              <i class="fa-solid fa-briefcase text-emerald-500"></i>
            </div>
            <div class="text-sm mt-2 text-blueGray-400">
              <span>{{ tel }}&nbsp;</span>
              <i class="fas fa-phone-alt text-emerald-500"></i>
            </div>
            <div class="text-sm mt-2 text-blueGray-400">
              <span>{{ email }}&nbsp;</span>
              <i class="fas fa-envelope text-emerald-500"></i>
            </div>
          </div>
        </div>

        <div class="pt-6 mt-10 border-t border-blueGray-200"></div>

        <div class="bg-white px-4 pt-4 pb-6">
          <div class="flex flex-warp">
            <div class="ml-3 px-4 w-full lg:w-12/12">
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-user text-emerald-500"></i>
                  ประวัติโดยย่อ / Biological
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm min-h-50-px leading-normal break-words text-blueGray-500"
                >
                  {{ bio }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-user-graduate text-emerald-500"></i>
                  การศึกษา / Education
                </h1>
                <div class="pt-1 border-t"></div>
                <p
                  class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                >
                  {{ education }}
                </p>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-briefcase text-emerald-500"></i>
                  ประสบการณ์การทำงาน / Experience
                </h1>
                <div class="pt-1 border-t"></div>
                <div v-for="exp in experiences" :key="exp.exp">
                  <p
                    v-if="exp.exp"
                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                  >
                    • {{ exp.exp }}
                  </p>
                </div>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-tools text-emerald-500"></i>
                  ทักษะ / Skills
                </h1>
                <div class="pt-1 border-t"></div>
                <div v-for="skill in skills" :key="skill.skill">
                  <p
                    v-if="skill.skill"
                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                  >
                    • {{ skill.skill }}
                  </p>
                </div>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-star text-emerald-500"></i>
                  ความเชี่ยวชาญ / Expertise
                </h1>
                <div class="pt-1 border-t"></div>
                <div v-for="expert in experts" :key="expert.expert">
                  <p
                    v-if="expert.expert"
                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                  >
                    • {{ expert.expert }}
                  </p>
                </div>
              </div>
              <div class="px-0">
                <h1 class="mt-6 font-semibold text-lg text-blueGray-700">
                  <i class="fas fa-award text-emerald-500"></i>
                  ผลงาน / Research
                </h1>
                <div class="pt-1 border-t"></div>
                <div v-for="research in researches" :key="research">
                  <p
                    v-if="research.research"
                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                  >
                    • {{ research.research }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//? Packages
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("personnel", ["cv"]),
  },

  data() {
    return {
      id: this.$route.params.id,

      //? Data
      nameTitle: "",
      nameTh: "",
      lastNameTh: "",
      nameEn: "",
      lastNameEn: "",
      position: "",
      education: "",
      image: "",
      tel: "",
      email: "",
      workplace: "",
      bio: "",
      experiences: null,
      skills: null,
      experts: null,
      researches: null,
      position: "",
    };
  },

  async mounted() {
    await this.getPersonalCV(this.id);
  },

  methods: {
    ...mapActions("personnel", ["getCv"]),
    async getPersonalCV(id) {
      try {
        await this.getCv(id);
        if (this.cv?.length !== 0) {
          this.nameTitle = this.cv?.name_title;
          let nameTh = this.cv?.name_th.split(" ");
          this.nameTh = nameTh[0];
          this.lastNameTh = nameTh[1];
          let nameEn = this.cv?.name_en.split(" ");
          this.nameEn = nameEn[0];
          this.lastNameEn = nameEn[1];
          this.position = this.cv?.position_academic;
          this.education = this.cv?.education;
          this.image = this.cv?.image_profile;
          this.tel = this.cv?.tel_number;
          this.email = this.cv?.email;
          this.workplace = this.cv?.workplace;
          this.bio = this.cv?.bio;
          this.experiences = this.cv?.experiences;
          this.skills = this.cv?.skills;
          this.experts = this.cv?.experts;
          this.researches = this.cv?.researches;
          this.position = this.cv?.position_academic;
        } else {
          //? If not find data call getPersonnel function
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

          Swal.fire({
            icon: "error",
            title: "ขออภัย ไม่พบข้อมูล",
          }).then(() => {
            this.$router.push({ name: "Home" });
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
