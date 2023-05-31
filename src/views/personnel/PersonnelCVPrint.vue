<template>
  <div
    class="bg-white :border custom :border-blueGray-300 :shadow-lg page"
    ref="personnelCv"
  >
    <div class="bg-blueGray-100 px-0 pt-2 pb-4">
      <div class="flex flex-warp">
        <div class="ml-0 px-0 w-full lg:w-3/12">
          <img
            alt="Image profile"
            :src="image"
            class="mt-2 rounded-full shadow-lg max-w-100-px h-100-px center-img bg-emerald-500"
          />
        </div>
        <div class="ml-0 px-0 w-full lg:w-6/12">
          <h1 class="mt-4 font-normal text-xl text-blueGray-800">
            {{ nameTitle }}{{ nameTh }} {{ lastNameTh }}
          </h1>
          <h1 class="mt-2 font-semibold text-lg text-blueGray-800">
            {{ nameEn }} {{ lastNameEn }}
          </h1>
          <h3 class="mt-2 font-semibold text-blueGray-800">
            {{ position }}
          </h3>
        </div>
        <div
          class="text-right mt-5 mr-2 w-full lg:w-4/12 border-l border-blueGray-300"
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
    </div>

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
</template>

<script>
import http from "@/services/WebpageService";
export default {
  data() {
    return {
      //? Data
      id: "",
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

  mounted() {
    this.getCvData();
    this.printCV();
  },

  methods: {
    async getCvData() {
      try {
        const local = JSON.parse(localStorage.getItem("user"));
        const citizenId = local.card_id;
        const res = await http.get(`cv/search/citizen-id/${citizenId}`);
        if (res.data.success) {
          //? Find data
          this.cv = res.data.data;
          this.id = this.cv.id;
          this.nameTitle = this.cv.name_title;
          let nameTh = this.cv.name_th.split(" ");
          this.nameTh = nameTh[0];
          this.lastNameTh = nameTh[1];
          let nameEn = this.cv.name_en.split(" ");
          this.nameEn = nameEn[0];
          this.lastNameEn = nameEn[1];
          this.position = this.cv.position_academic;
          this.education = this.cv.education;
          this.image = this.cv.image_profile;
          this.tel = this.cv.tel_number;
          this.email = this.cv.email;
          this.workplace = this.cv.workplace;
          this.bio = this.cv.bio;
          this.experiences = this.cv.experiences;
          this.skills = this.cv.skills;
          this.experts = this.cv.experts;
          this.researches = this.cv.researches;
          this.position = this.cv.position_academic;
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
            this.$router.push({ name: "CV" });
          });
        }
      } catch (err) {
        console.log(err);
      }
    },

    printCV() {
      const Swal = this.$swal.mixin({
        customClass: {
          title: "font-weight-bold custom",
          confirmButton:
            "px-6 py-3 mx-4 costom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
        },
        buttonsStyling: false,
      });
      Swal.fire({
        title: "กด CTRL + P",
        html: "เลือก More settings | เมนู Paper size เลือก A4 | เมนู Options นำเครื่องหมายถูกต้องตรง Header and footers ออก",
        icon: "warning",
        showCancelButton: false,
        confirmButtonText: "ยืนยัน",
      }).then((result) => {
        if (result.isConfirmed) {
          let cv = this.$refs.personnelCv;
          document.body.innerHTML = cv.innerHTML;
          window.print();
        }
      });
    },
  },
};
</script>

<style>
@page {
  size: A4;
  margin: 0;
}

@media print {
  body,
  page {
    margin: 0;
    border: initial;
    border-radius: initial;
    width: initial;
    min-height: initial;
    box-shadow: initial;
    background: initial;
    page-break-after: always;
  }
}
</style>
