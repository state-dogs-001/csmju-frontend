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
                      MIS
                    </h3>
                  </div>
                </div>
                <div class="w-full lg:w-6/12">
                  <h3 class="mt-1 text-2xl font-semibold">ประวัติโดยย่อ</h3>
                  <h3 class="text-xl font-normal">| Curiculum Vitae</h3>
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

              <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                <div class="flex flex-wrap">
                  <!-- from input -->
                  <div class="w-full lg:w-6/12">
                    <form @submit.stop.prevent="handleSubmit">
                      <!-- Workplace checkbox edit -->
                      <div class="flex flex-wrap mb-2">
                        <div class="w-full px-4">
                          <label
                            class="inline-flex items-center cursor-pointer"
                          >
                            <input
                              v-model="isEditWorkplace"
                              type="checkbox"
                              class="w-5 h-5 ml-1 rounded bg-blueGray-200 text-blueGray-700"
                            />
                            <span class="ml-2 text-blueGray-700">
                              แก้ไขข้อมูลสถานที่ทำงาน
                            </span>
                          </label>
                        </div>
                      </div>

                      <!-- Workplace -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4">
                          <label class="block text-gray-700 text-md"
                            >สถานที่ทำงาน
                            <span class="text-red-500">*</span></label
                          >
                          <textarea
                            v-model="workplace"
                            type="text"
                            placeholder="Workplace"
                            class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700"
                            :class="{ 'bg-gray-200': !isEditWorkplace }"
                            :disabled="!isEditWorkplace"
                          ></textarea>
                          <div
                            v-if="v$.workplace.$error"
                            class="mt-2 text-sm text-red-500 text-left"
                          >
                            {{ v$.workplace.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Bio -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4">
                          <label class="block text-gray-700 text-md"
                            >ประวัติโดยย่อ
                            <span class="text-red-500">*</span></label
                          >
                          <textarea
                            v-model="bio"
                            type="text"
                            placeholder="Biological"
                            class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700"
                          ></textarea>
                          <div
                            v-if="v$.bio.$error"
                            class="mt-2 text-sm text-red-500 text-left"
                          >
                            {{ v$.bio.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Experience -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4">
                          <label class="block text-gray-700 text-md"
                            >ประสบการณ์การทำงาน</label
                          >
                          <div
                            v-for="(input, index) in experiences"
                            :key="index"
                            class="flex text-center mt-2"
                          >
                            <div class="w-8/12">
                              <textarea
                                v-model="input.exp"
                                class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                                type="text"
                                placeholder="Experience"
                              />
                            </div>
                            <div class="md:text-right w-4/12">
                              <button
                                v-show="index === experiences.length - 1"
                                @click="addFieldExp(input, experiences)"
                                class="mr-2 px-6 py-2 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                type="button"
                              >
                                <i class="fas fa-plus" /> เพิ่ม
                              </button>

                              <button
                                v-show="experiences.length > 1"
                                @click="removeFieldExp(index, experiences)"
                                class="px-6 py-2 mt-2 md:mt-0 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                                type="button"
                              >
                                <i class="fas fa-trash" /> ลบ
                              </button>
                            </div>
                          </div>
                          <div
                            v-if="v$.experiences.$error"
                            class="mt-2 text-sm text-red-500 text-left"
                          >
                            {{ v$.experiences.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Skills -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4">
                          <label class="block text-gray-700 text-md"
                            >ทักษะ</label
                          >
                          <div
                            v-for="(input, index) in skills"
                            :key="index"
                            class="flex text-center mt-2"
                          >
                            <div class="w-8/12">
                              <textarea
                                v-model="input.skill"
                                class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                                type="text"
                                placeholder="Skill"
                              />
                            </div>
                            <div class="md:text-right w-4/12">
                              <button
                                v-show="index === skills.length - 1"
                                @click="addFieldSkill(input, skills)"
                                class="mr-2 px-6 py-2 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                type="button"
                              >
                                <i class="fas fa-plus" /> เพิ่ม
                              </button>

                              <button
                                v-show="skills.length > 1"
                                @click="removeFieldSkill(index, skills)"
                                class="px-6 py-2 mt-2 md:mt-0 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                                type="button"
                              >
                                <i class="fas fa-trash" /> ลบ
                              </button>
                            </div>
                          </div>
                          <div
                            v-if="v$.skills.$error"
                            class="mt-2 text-sm text-red-500 text-left"
                          >
                            {{ v$.skills.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Expertise -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4">
                          <label class="block text-gray-700 text-md"
                            >ความเชี่ยวชาญ</label
                          >
                          <div
                            v-for="(input, index) in experts"
                            :key="index"
                            class="flex text-center mt-2"
                          >
                            <div class="w-8/12">
                              <textarea
                                v-model="input.expert"
                                class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                                type="text"
                                placeholder="Expertise"
                              />
                            </div>
                            <div class="md:text-right w-4/12">
                              <button
                                v-show="index === experts.length - 1"
                                @click="addFieldExpert(input, experts)"
                                class="mr-2 px-6 py-2 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                type="button"
                              >
                                <i class="fas fa-plus" /> เพิ่ม
                              </button>

                              <button
                                v-show="experts.length > 1"
                                @click="removeFieldExpert(index, experts)"
                                class="px-6 py-2 mt-2 md:mt-0 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                                type="button"
                              >
                                <i class="fas fa-trash" /> ลบ
                              </button>
                            </div>
                          </div>
                          <div
                            v-if="v$.experts.$error"
                            class="mt-2 text-sm text-red-500 text-left"
                          >
                            {{ v$.experts.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Research -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4">
                          <label class="block text-gray-700 text-md"
                            >ความเชี่ยวชาญ</label
                          >
                          <div
                            v-for="(input, index) in researches"
                            :key="index"
                            class="flex text-center mt-2"
                          >
                            <div class="w-8/12">
                              <textarea
                                v-model="input.research"
                                class="w-full placeholder-blueGray-300 px-3 py-2 leading-tight text-gray-700 border"
                                type="text"
                                placeholder="Research"
                              />
                            </div>
                            <div class="md:text-right w-4/12">
                              <button
                                v-show="index === researches.length - 1"
                                @click="addFieldResearch(input, researches)"
                                class="mr-2 px-6 py-2 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                                type="button"
                              >
                                <i class="fas fa-plus" /> เพิ่ม
                              </button>

                              <button
                                v-show="researches.length > 1"
                                @click="removeFieldResearch(index, researches)"
                                class="px-6 py-2 mt-2 md:mt-0 text-sm font-bold text-white transition-all duration-150 ease-linear rounded shadow outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                                type="button"
                              >
                                <i class="fas fa-trash" /> ลบ
                              </button>
                            </div>
                          </div>
                          <div
                            v-if="v$.researches.$error"
                            class="mt-2 text-sm text-red-500 text-left"
                          >
                            {{ v$.researches.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Buttons -->
                      <div class="py-6 text-center">
                        <button
                          class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="submit"
                        >
                          บันทึกข้อมูล <i class="fas fa-save" />
                        </button>
                      </div>
                    </form>
                  </div>

                  <!-- Simulator  -->
                  <div class="w-full lg:w-6/12">
                    <div class="p-4 bg-emerald-300 rounded-lg">
                      <div
                        class="bg-white border border-blueGray-300 shadow-lg"
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
                              <h1
                                class="mt-4 font-normal text-xl text-blueGray-800"
                              >
                                {{ nameTitle }}{{ nameTh }} {{ lastNameTh }}
                              </h1>
                              <h1
                                class="mt-2 font-semibold text-lg text-blueGray-800"
                              >
                                {{ nameEn }} {{ lastNameEn }}
                              </h1>
                              <h3
                                class="mt-2 font-semibold text-blueGray-800"
                              >
                                {{ position }}
                              </h3>
                            </div>
                            <div
                              class="text-right mt-5 mr-2 w-full lg:w-4/12 border-l border-blueGray-300"
                            >
                              <div class="text-sm text-blueGray-400">
                                <span>{{ workplace }}&nbsp;</span>
                                <i
                                  class="fa-solid fa-briefcase text-emerald-500"
                                ></i>
                              </div>
                              <div class="text-sm mt-2 text-blueGray-400">
                                <span>{{ tel }}&nbsp;</span>
                                <i
                                  class="fas fa-phone-alt text-emerald-500"
                                ></i>
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
                                <h1
                                  class="mt-6 font-semibold text-lg text-blueGray-700"
                                >
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
                                <h1
                                  class="mt-6 font-semibold text-lg text-blueGray-700"
                                >
                                  <i
                                    class="fas fa-user-graduate text-emerald-500"
                                  ></i>
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
                                <h1
                                  class="mt-6 font-semibold text-lg text-blueGray-700"
                                >
                                  <i
                                    class="fas fa-briefcase text-emerald-500"
                                  ></i>
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
                                <h1
                                  class="mt-6 font-semibold text-lg text-blueGray-700"
                                >
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
                                <h1
                                  class="mt-6 font-semibold text-lg text-blueGray-700"
                                >
                                  <i class="fas fa-star text-emerald-500"></i>
                                  ความเชี่ยวชาญ / Expertise
                                </h1>
                                <div class="pt-1 border-t"></div>
                                <div
                                  v-for="expert in experts"
                                  :key="expert.expert"
                                >
                                  <p
                                    v-if="expert.expert"
                                    class="ml-5 font-normal text-sm leading-normal break-normal text-blueGray-500"
                                  >
                                    • {{ expert.expert }}
                                  </p>
                                </div>
                              </div>
                              <div class="px-0">
                                <h1
                                  class="mt-6 font-semibold text-lg text-blueGray-700"
                                >
                                  <i class="fas fa-award text-emerald-500"></i>
                                  ผลงาน / Research
                                </h1>
                                <div class="pt-1 border-t"></div>
                                <div
                                  v-for="research in researches"
                                  :key="research"
                                >
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

                      <!-- Buttons -->
                      <div class="py-6 text-center">
                        <button
                          @click="sendToPreview"
                          class="px-6 py-3 mb-1 text-sm font-bold rounded shadow outline-none focus:outline-none"
                          :class="
                            cv === null
                              ? 'cursor-not-allowed bg-gray-200 text-blueGray-700'
                              : 'text-emerald-500 active:text-white bg-white active:bg-emerald-500 hover:shadow-lg'
                          "
                        >
                          นำออกเอกสาร <i class="fas fa-file-export" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <!-- Simulator -->
                </div>
              </div>
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
import { required, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),

      //? Data
      cv: null,
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

      //? Boolean
      isEditWorkplace: false,

      //? Form
      workplace:
        "สาขาวิชาวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้ จ.เชียงใหม่",
      bio: "",
      experiences: [{ exp: "" }],
      skills: [{ skill: "" }],
      experts: [{ expert: "" }],
      researches: [{ research: "" }],
    };
  },

  mounted() {
    this.getPersonnelCV();
  },

  methods: {
    //? Get personnel cv
    async getPersonnelCV() {
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
        } else {
          //? If not find data call getPersonnel function
          this.getPersonnel(citizenId);
        }
      } catch (err) {
        console.log(err);
      }
    },

    //? Get personnel data
    async getPersonnel(citizenId) {
      try {
        const res = await http.get(`personnel/search/citizen-id/${citizenId}`);
        if (res.data.success) {
          const personnel = res.data.data;
          this.nameTitle = personnel.name_title;
          let nameTh = personnel.name_th.split(" ");
          this.nameTh = nameTh[0];
          this.lastNameTh = nameTh[1];
          let nameEn = personnel.name_en.split(" ");
          this.nameEn = nameEn[0];
          this.lastNameEn = nameEn[1];
          this.position = personnel.position_academic;
          this.education = personnel.education;
          this.tel = personnel.tel_number;
          this.email = personnel.email;
          this.image = personnel.image_profile;
        }
      } catch (err) {
        console.log(err);
      }
    },

    //? Add Experience
    addFieldExp(input, array) {
      if (input.exp) {
        let obj = {};
        for (const [key] of Object.entries(input)) {
          obj[key] = "";
        }
        array.push(obj);
      }
    },

    //? Remove Experience
    removeFieldExp(index, array) {
      array.splice(index, 1);
    },

    //? Add Skill
    addFieldSkill(input, array) {
      if (input.skill) {
        let obj = {};
        for (const [key] of Object.entries(input)) {
          obj[key] = "";
        }
        array.push(obj);
      }
    },

    //? Remove Skill
    removeFieldSkill(index, array) {
      array.splice(index, 1);
    },

    //? Add Expert
    addFieldExpert(input, array) {
      if (input.expert) {
        let obj = {};
        for (const [key] of Object.entries(input)) {
          obj[key] = "";
        }
        array.push(obj);
      }
    },

    //? Remove Expert
    removeFieldExpert(index, array) {
      array.splice(index, 1);
    },

    //? Add Research
    addFieldResearch(input, array) {
      if (input.research) {
        let obj = {};
        for (const [key] of Object.entries(input)) {
          obj[key] = "";
        }
        array.push(obj);
      }
    },

    //? Remove Research
    removeFieldResearch(index, array) {
      array.splice(index, 1);
    },

    //? Handle submit
    handleSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let local = JSON.parse(localStorage.getItem("user"));
        let citizenId = local.card_id;
        let data = {
          citizen_id: citizenId,
          workplace: this.workplace,
        };

        if (this.bio) {
          data.bio = this.bio;
        } else {
          data.bio = "";
        }

        if (this.experiences[0].exp !== "") {
          data.experiences = this.experiences;
        } else {
          data.experiences = [{ exp: "" }];
        }

        if (this.skills[0].skill !== "") {
          data.skills = this.skills;
        } else {
          data.skills = [{ skill: "" }];
        }

        if (this.experts[0].expert !== "") {
          data.experts = this.experts;
        } else {
          data.experts = [{ expert: "" }];
        }

        if (this.researches[0].research !== "") {
          data.researches = this.researches;
        } else {
          data.researches = [{ research: "" }];
        }

        //? If cv database has data of this user call update function
        //? else call create function
        this.cv !== null ? this.onUpdate(data) : this.onCreate(data);
      }
    },

    //? Create function
    async onCreate(data) {
      //? Set sweet alert default settings
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

      try {
        const res = await http.post("cv/new", data);
        if (res.data.success) {
          //? Success
          let msg = res.data.message;
          Swal.fire({
            icon: "success",
            title: msg,
          }).then(() => {
            window.location.reload();
          });
        }
      } catch (err) {
        //! Error create
        let errMsg = err?.response?.data?.message;
        if (errMsg) {
          Swal.fire({
            icon: "error",
            title: errMsg,
          });
          return;
        }

        Swal.fire({
          icon: "error",
          title: "ขออภัย ทำรายการไม่สำเร็จ",
        });
      }
    },

    //? Update function
    async onUpdate(data) {
      //? Set sweet alert default settings
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

      try {
        const res = await http.post(`cv/update/${this.id}`, data);
        if (res.data.success) {
          //? Success
          let msg = res.data.message;
          Swal.fire({
            icon: "success",
            title: msg,
          }).then(() => {
            window.location.reload();
          });
        }
      } catch (err) {
        //! Error update
        let errMsg = err?.response?.data?.message;
        if (errMsg) {
          Swal.fire({
            icon: "error",
            title: errMsg,
          });
          return;
        }

        Swal.fire({
          icon: "error",
          title: "ขออภัย ทำรายการไม่สำเร็จ",
        });
      }
    },

    //? Send doc to preview page
    sendToPreview() {
      let routeData = this.$router.resolve({
        name: "CVPrint",
      });
      window.open(routeData.href, "_blank");
    },
  },

  validations() {
    return {
      workplace: {
        required: helpers.withMessage("ป้อนสถานที่ทำงานก่อน", required),
      },
      bio: {
        required: helpers.withMessage("ป้อนประวัติส่วนตัวก่อน", required),
      },
      experiences: {
        required: helpers.withMessage("ป้อนประสบการณ์ทำงานก่อน", () => {
          const lastIndex = this.experiences.length - 1;
          if (lastIndex > 0) return this.experiences[lastIndex].exp !== "";
          return true;
        }),
      },
      skills: {
        required: helpers.withMessage("ป้อนข้อมูลทักษะก่อน", () => {
          const lastIndex = this.skills.length - 1;
          if (lastIndex > 0) return this.skills[lastIndex].skill !== "";
          return true;
        }),
      },
      experts: {
        required: helpers.withMessage("ป้อนข้อมูลความเชี่ยวชาญก่อน", () => {
          const lastIndex = this.experts.length - 1;
          if (lastIndex > 0) return this.experts[lastIndex].expert !== "";
          return true;
        }),
      },
      researches: {
        required: helpers.withMessage("ป้อนข้อมูลงานวิจัยก่อน", () => {
          const lastIndex = this.researches.length - 1;
          if (lastIndex > 0) return this.researches[lastIndex].research !== "";
          return true;
        }),
      },
    };
  },
};
</script>
