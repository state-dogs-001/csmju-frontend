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
                  <h3 class="mt-1 text-2xl font-semibold">
                    ระบบแก้ไขแจ้งตกค้างรายวิชา
                  </h3>

                  <h3 class="text-xl font-normal">
                    | Course Residualisation Edit System
                  </h3>
                </div>

                <!-- Back to main service -->
                <div class="w-full lg:w-3/12">
                  <div class="mt-4 text-right">
                    <router-link
                      to="/student/service/course/history"
                      class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    >
                      ย้อนกลับ
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                <div class="flex flex-wrap">
                  <!-- Image cover -->
                  <div class="w-full lg:w-6/12 lg:order-2">
                    <div class="p-4">
                      <img :src="cover" class="shadow-none" alt="" />
                    </div>
                  </div>

                  <!-- Form -->
                  <div class="w-full lg:w-6/12 lg:order-1">
                    <form @submit.stop.prevent="handleSubmit">
                      <!-- Subject type -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4 md:w-12/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >กลุ่มรายวิชาเฉพาะ
                          </label>
                          <select
                            v-model="subjectType"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                          >
                            <option value="" selected disabled>
                              เลือกกลุ่มรายวิชาเฉพาะ
                            </option>
                            <option value="1">กลุ่มรายวิชาภายในสาขา</option>
                            <option value="2">กลุ่มรายวิชาภายนอกสาขา</option>
                          </select>
                          <div
                            v-if="v$.subjectType.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.subjectType.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- วิชาใน -->
                      <template v-if="subjectType === '1'">
                        <!-- Auto select -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4">
                            <label class="block text-gray-700 text-md"
                              >เลือกวิชาที่ต้องการแจ้ง</label
                            >
                            <VueMultiselect
                              v-model="subjectSelect"
                              :options="subjects"
                              :custom-label="customLabel"
                              :loading="isLoading"
                              :disabled="isLoading || selfComplete"
                              track-by="id"
                              class="select"
                              placeholder="กรอกรหัสหรือวิชาที่ต้องการแจ้ง (สามารถกรอกเลขส่วนใดส่วนหนึ่งของรหัสวิชาได้)"
                            >
                            </VueMultiselect>
                          </div>
                        </div>

                        <!-- Checkbox -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4 md:w-12/12">
                            <label
                              class="inline-flex items-center cursor-pointer"
                            >
                              <input
                                v-model="selfComplete"
                                type="checkbox"
                                class="w-5 h-5 ml-1 rounded bg-blueGray-200 text-blueGray-700"
                              />
                              <span class="ml-2 text-blueGray-700">
                                ต้องการกรอกข้อมูลด้วยตนเอง
                              </span>
                            </label>
                          </div>
                        </div>

                        <!-- Subject code field -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4">
                            <label class="block my-3 text-gray-700 text-md"
                              >รหัสรายวิชา</label
                            >
                            <input
                              v-model="subjectCode"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              :class="{
                                'bg-blueGray-200': !selfComplete,
                              }"
                              type="text"
                              maxlength="8"
                              placeholder="กรอกรหัสรายวิชา"
                              :disabled="!selfComplete"
                            />
                            <div
                              v-if="v$.subjectCode.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.subjectCode.$errors[0].$message }}
                            </div>
                          </div>
                        </div>

                        <!-- Subject name field -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4">
                            <label class="block my-3 text-gray-700 text-md"
                              >ชื่อรายวิชา</label
                            >
                            <input
                              v-model="subjectName"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              :class="{
                                'bg-blueGray-200': !selfComplete,
                              }"
                              type="text"
                              placeholder="กรอกชื่อรายวิชา"
                              :disabled="!selfComplete"
                            />
                            <div
                              v-if="v$.subjectName.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.subjectName.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                      </template>

                      <!-- วิชานอก -->
                      <template v-if="subjectType === '2'">
                        <!-- Subject code -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4">
                            <label class="block my-3 text-gray-700 text-md"
                              >รหัสรายวิชา</label
                            >
                            <input
                              v-model="subjectCode"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              type="text"
                              maxlength="8"
                              placeholder="กรอกรหัสรายวิชา"
                            />
                            <div
                              v-if="v$.subjectCode.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.subjectCode.$errors[0].$message }}
                            </div>
                          </div>
                        </div>

                        <!-- Subject name -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-4">
                            <label class="block my-3 text-gray-700 text-md"
                              >ชื่อรายวิชา</label
                            >
                            <input
                              v-model="subjectName"
                              class="w-full px-3 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="กรอกชื่อรายวิชา"
                            />
                            <div
                              v-if="v$.subjectName.$error"
                              class="mt-2 text-sm text-red-500"
                            >
                              {{ v$.subjectName.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                      </template>

                      <!-- Teacher -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4 md:w-12/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="Dates"
                            >บุคลากรผู้รับผิดชอบรายวิชา</label
                          >
                          <!-- If subject type is 1 -->
                          <select
                            v-if="subjectType == 1 || subjectType == ''"
                            v-model="advisorSelect"
                            id="advisor"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            :class="subjectType == '' ? 'bg-gray-200' : ''"
                            :disabled="subjectType == ''"
                          >
                            <option value="" selected disabled>
                              เลือกชื่ออาจารย์ผู้รับผิดชอบรายวิชา
                            </option>
                            <!-- วิชาใน -->
                            <template
                              v-if="teachers != null && subjectType == 1"
                            >
                              <option
                                v-for="advisor in teachers"
                                :key="advisor.id"
                                :value="advisor.name_title + advisor.name_th"
                              >
                                {{ advisor.name_title }} {{ advisor.name_th }}
                              </option>
                              <option value="other">อื่นๆ</option>
                            </template>
                            <!-- <template v-if="staff != null && subjectType == 2">
                              <option :value="staff.id">
                                {{ staff.name_title }} {{ staff.name_th }}
                              </option>
                            </template> -->
                          </select>

                          <!-- If subject type is 2 -->
                          <input
                            v-if="subjectType == 2 || advisorSelect == 'other'"
                            type="text"
                            v-model="advisorInput"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            placeholder="ชื่ออาจารย์ผู้รับผิดชอบรายวิชา"
                          />
                          <div
                            v-if="v$.advisorSelect.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.advisorSelect.$errors[0].$message }}
                          </div>
                          <div
                            v-if="v$.advisorInput.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.advisorInput.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Description -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4 md:w-12/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >เหตุผลในการยืนคำร้องแจ้งตก-ค้างรายวิชา</label
                          >
                          <textarea
                            v-model="subjectDetail"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            rows="5"
                            placeholder="ระบุเหตุผลในการยืนคำร้องแจ้งตก-ค้างรายวิชา"
                          ></textarea>
                          <div
                            v-if="v$.subjectDetail.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.subjectDetail.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Buttons -->
                      <div class="py-6 text-center">
                        <button
                          @click="clearForm"
                          class="px-6 py-3 mb-1 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-red-500 active:bgred-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          ล้าง
                        </button>
                        <button
                          class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="submit"
                        >
                          ยืนยัน
                        </button>
                      </div>
                    </form>
                  </div>
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
//? Image
import cover from "@/assets/images/enroll_class.png";
//? API
import http from "@/services/WebpageService";
//? Packages
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
export default {
  components: { VueMultiselect },

  data() {
    return {
      v$: useValidate(),

      id: this.$route.params.id,

      //? Data
      teachers: null,
      residual: null,

      //? Image
      cover,

      //? Form
      subjectType: "",
      subjectCode: "",
      subjectName: "",
      subjectDetail: "",
      advisor: "",

      //? Advisor Select
      advisorSelect: "",
      advisorInput: "",

      //? Subject self complete status
      selfComplete: false,

      //? Subject Select
      subjectSelect: "",
      isLoading: false,

      studentProfile: null,

      //? Boolean
      advisorType: false,
    };
  },

  watch: {
    subjectSelect(val) {
      if (val) {
        this.subjectCode = val?.subject_code;
        this.subjectName = val?.name_th;
      }
    },
  },

  mounted() {
    this.getStudent();
    this.getTeacher();
    this.getSubjects();
  },

  methods: {
    //? Get student data
    getStudent() {
      let user = JSON.parse(localStorage.getItem("user"));
      let citizenId = user.card_id;

      http
        .get(`student/search/citizen-id/${citizenId}`)
        .then((res) => {
          if (res.data.success) {
            this.studentProfile = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //? Get teachers data
    getTeacher() {
      http
        .get("personnel/filter/teacher")
        .then((res) => {
          if (res.data.success) {
            this.teachers = res.data.data;
            //? Call getResidual fucntion and push teachers data into function
            this.getResidual(this.teachers);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    //? Get Subjects
    async getSubjects() {
      try {
        //? Start loading data
        this.isLoading = true;

        const res = await http.get("subjects/all");

        if (res.data.success) {
          this.subjects = res.data?.data;
          //? Stop loading
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //? Get residual
    async getResidual(teachers) {
      try {
        const res = await http.get(`residual/show/update/${this.id}`);
        if (res.data.success) {
          this.residual = res.data.data;
          this.subjectType = this.residual.subject_type;
          this.subjectCode = this.residual.subject_code;
          this.subjectName = this.residual.subject_name;
          this.subjectDetail = this.residual.detail;
          this.advisor = this.residual.advisor;
          if (this.subjectType == 1) {
            //? Set self complete to true
            this.selfComplete = true;
            //? Loop teachers data and check if teachers equal advisor break loop
            const len = teachers.length;
            for (let i = 0; i < len; i++) {
              let advisor = teachers[i].name_title + teachers[i].name_th;
              if (advisor == this.advisor) {
                this.advisorSelect = this.advisor;
                break;
              } else {
                this.advisorSelect = "other";
                this.advisorInput = this.advisor;
              }
            }
          } else {
            this.advisorInput = this.advisor;
          }
        }
      } catch (err) {
        console.log(err);
      }
    },

    //? Reset form
    clearForm() {
      this.v$.$reset();
      this.subjectType = "";
      this.selfComplete = false;
      this.subjectSelect = "";
      this.subjectCode = "";
      this.subjectName = "";
      this.subjectDetail = "";
      this.advisor = "";
      this.advisorSelect = "";
      this.advisorInput = "";
    },

    //? Check advisor
    checkAdvisor() {
      if (this.subjectType == 2 || this.advisorSelect == "other") {
        this.advisor = this.advisorInput;
      } else {
        this.advisor = this.advisorSelect;
      }
    },

    //? Custom label for multiselect
    customLabel({ subject_code, name_th }) {
      return `${subject_code} - ${name_th}`;
    },

    //? Submit form
    handleSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        //? Call check advisor function
        this.checkAdvisor();

        //? Set default sweet alert
        const swalWithBootstrapButtons = this.$swal.mixin({
          customClass: {
            title: "font-weight-bold custom",
            confirmButton:
              "px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
            cancelButton:
              "px-6 py-3 mx-4 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          },
          buttonsStyling: false,
        });

        swalWithBootstrapButtons
          .fire({
            title: "ตรวจสอบข้อมูลการแจ้งตก-ค้างรายวิชา",
            html:
              ` <p class="custom text-left font-normal text-sm"> <b>รหัสรายวิชา :</b> ${this.subjectCode}</p>` +
              ` <p class="custom text-left font-normal text-sm"> <b>ห้องเรียน :</b> ${this.subjectName}</p>` +
              ` <p class="custom text-left font-normal text-sm">  <b>อาจารย์ผู้รับผิดชอบ :</b> ${this.advisor} </p>` +
              ` <p class="custom text-left font-normal text-sm"> <b>รายละเอียด :</b> ${this.subjectDetail}</p>`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              let data = new FormData();
              let studentId = this.studentProfile.id;
              data.append("subject_type", this.subjectType);
              data.append("subject_code", this.subjectCode);
              data.append("subject_name", this.subjectName);
              data.append("detail", this.subjectDetail);
              data.append("student_id", studentId);
              data.append("advisor", this.advisor);

              http
                .post(`residual/update/${this.id}`, data)
                .then(() => {
                  swalWithBootstrapButtons
                    .fire(
                      "บันทึกเรียบร้อย!",
                      "ดำเนินการแก้ไขแจ้งตก-ค้างรายวิชาเรียบร้อย",
                      "success"
                    )
                    .then(() => {
                      this.$router.push({ name: "CourseHistory" });
                    });
                })
                .catch((error) => {
                  let errMsg = error?.response?.data?.message;
                  if (errMsg) {
                    swalWithBootstrapButtons.fire(
                      "ข้อมูลไม่ถูกต้อง!",
                      errMsg,
                      "error"
                    );
                    return;
                  }

                  swalWithBootstrapButtons.fire(
                    "ข้อมูลไม่ถูกต้อง!",
                    "กรุณาตรวจสอบข้อมูลอีกครั้ง",
                    "error"
                  );
                });
            } else if (result.dismiss === this.$swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire(
                "ยกเลิกเรียบร้อย!",
                "คุณได้ยกเลิกการแจ้งตก-ค้างรายวิชา",
                "error"
              );
            }
          });
      }
    },
  },

  validations() {
    return {
      subjectCode: {
        required: helpers.withMessage("ป้อนรหัสรายวิชาก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) => `รหัสรายวิชาต้องไม่น้อยกว่า ${$params.min} ตัว`,
          minLength(5)
        ),
      },
      subjectType: {
        required: helpers.withMessage("เลือกกลุ่มรายวิชาก่อน", required),
      },
      subjectName: {
        required: helpers.withMessage("ป้อนชื่อรายวิชาก่อน", required),
      },
      advisorSelect: {
        required: helpers.withMessage(
          "เลือกอาจารย์ผู้รับผิดชอบรายวิชาก่อน",
          () => {
            if (this.subjectType == 1 || this.subjectType == "") {
              if (this.advisorSelect != "") {
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
      advisorInput: {
        required: helpers.withMessage(
          "ป้อนชื่ออาจารย์ผู้รับผิดชอบรายวิชาก่อน",
          () => {
            if (this.subjectType == 2 || this.advisorSelect == "other") {
              if (this.advisorInput != "") {
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
      subjectDetail: {
        required: helpers.withMessage("ป้อนเหตุผลการยื่นคำร้องก่อน", required),
      },
    };
  },
};
</script>
