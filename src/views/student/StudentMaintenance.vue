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
                    ระบบแจ้งซ่อมอุปกรณ์ / บำรุงรักษา
                  </h3>
                  <h3 class="text-xl font-normal">| Maintenance System</h3>
                </div>
                <div class="w-full lg:w-3/12">
                  <div class="mt-4 text-right">
                    <router-link
                      to="/student/service"
                      class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    >
                      ย้อนกลับ
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-6/12 lg:order-2">
                    <div class="p-4">
                      <img :src="cover" class="shadow-none" alt="" />
                    </div>
                  </div>

                  <!-- Form -->
                  <div class="w-full lg:w-6/12 lg:order-1">
                    <form @submit.prevent="handleSubmit">
                      <!-- Radio button -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full md:w-6/12">
                          <div class="block text-gray-700 text-md">
                            หมายเลขครุภัณฑ์ที่ชำรุด
                            <span class="text-red-500">*</span>
                          </div>
                          <label
                            class="inline-flex items-center cursor-pointer mr-4 mt-4"
                          >
                            <input
                              type="radio"
                              v-model="hadEquipId"
                              value="1"
                              class="w-5 h-5 transition-all duration-150 ease-linear border-none bg-gray-200 text-blueGray-700"
                            />
                            <span class="ml-2 text-sm text-blueGray-600">
                              มีหมายเลขครุภัณฑ์
                            </span>
                          </label>
                          <label
                            class="inline-flex items-center cursor-pointer mt-4"
                          >
                            <input
                              type="radio"
                              v-model="hadEquipId"
                              value="2"
                              class="w-5 h-5 transition-all duration-150 ease-linear border-none bg-gray-200 text-blueGray-700"
                            />
                            <span class="ml-2 text-sm text-blueGray-600">
                              ไม่มีหมายเลขครุภัณฑ์
                            </span>
                          </label>
                        </div>
                      </div>

                      <!-- Equipment id -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full">
                          <label class="block text-gray-700 text-md"
                            >เลือกรหัสครุภัณฑ์ที่ชำรุด
                            <span
                              class="text-red-500"
                              :class="{ hidden: hadEquipId === '2' }"
                              >*</span
                            ></label
                          >
                          <VueMultiselect
                            v-model="selected"
                            :options="equipments"
                            :custom-label="customLabel"
                            :loading="isLoading"
                            :disabled="isLoading || hadEquipId === '2'"
                            track-by="equip_id"
                            class="select"
                            placeholder="กรอกรหัสครุภัณฑ์ที่ชำรุด (สามารถกรอกเลขส่วนใดส่วนหนึ่งของหมายเลขครุภัณฑ์ได้)"
                          >
                          </VueMultiselect>
                          <div
                            v-if="v$.selected.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.selected.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Equipment name and Equipment room  -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-ful md:w-6/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >ชื่อครุภัณฑ์
                            <span class="text-red-500">*</span></label
                          >
                          <input
                            type="text"
                            v-model="equipName"
                            class="w-full text-gray-700"
                            :class="{
                              'bg-blueGray-200':
                                hadEquipId === '1' && equipName === '',
                            }"
                            :disabled="hadEquipId === '1'"
                            placeholder="ชื่อของครุภัณฑ์"
                          />
                          <div
                            v-if="v$.equipName.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.equipName.$errors[0].$message }}
                          </div>
                        </div>

                        <div class="w-full px-2 md:w-6/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >ห้อง <span class="text-red-500">*</span></label
                          >
                          <select
                            v-model="equipRoom"
                            class="w-full"
                            :class="[
                              equipRoom === ''
                                ? 'text-gray-500'
                                : 'text-gray-700',
                              hadEquipId === '1' && equipRoom === ''
                                ? 'bg-blueGray-300'
                                : '',
                            ]"
                            :disabled="hadEquipId === '1'"
                          >
                            <option value="" selected disabled>
                              ห้องที่จัดเก็บครุภัณฑ์
                            </option>
                            <option
                              v-for="room in rooms"
                              :key="room"
                              :value="room.room_id"
                              class="text-gray-700"
                            >
                              {{ room.room_name_th }}
                            </option>
                          </select>
                          <div
                            v-if="v$.equipRoom.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.equipRoom.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Equipment detail -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full md:w-12/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >รายละเอียด
                            <span class="text-red-500">*</span></label
                          >
                          <textarea
                            v-model="detail"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            rows="5"
                            placeholder="อาการชำรุดเบื้องต้น"
                          ></textarea>
                          <div
                            v-if="v$.detail.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.detail.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Notifier name -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full">
                          <label class="block my-3 text-gray-700 text-md"
                            >ชื่อ-นามสกุล ผู้แจ้ง
                            <span class="text-red-500">*</span></label
                          >
                          <input
                            type="text"
                            v-model="notifierName"
                            class="w-full text-gray-700"
                            placeholder="ชื่อ-นามสกุล"
                          />
                          <div
                            v-if="v$.notifierName.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.notifierName.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Image Upload -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full">
                          <label class="block my-3 text-gray-700 text-md"
                            >รูปภาพ
                            <span class="text-red-500 text-xs"
                              >(ไฟล์ที่อัปโหลดขนาดต้องไม่เกิน 8MB)</span
                            ></label
                          >
                          <input
                            ref="fileupload"
                            @change="onFileChange"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            type="file"
                          />
                          <!-- Preview -->
                          <div class="mt-4">
                            <img
                              v-if="imgUrl"
                              :src="imgUrl"
                              class="mt-2 rounded-lg shadow-lg center-img w-1/2 h-auto cropped bg-emerald-500"
                            />
                          </div>
                        </div>
                      </div>

                      <!-- Buttons -->
                      <div class="flex flex-wrap justify-center mt-12 mb-6">
                        <button
                          @click="handleReset"
                          class="px-6 py-4 mr-2 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow-lg outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-broom"></i> ล้าง
                        </button>
                        <button
                          class="px-6 py-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow-lg outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="submit"
                        >
                          <i class="fas fa-save"></i>
                          บันทึกข้อมูล
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
//? Images
import cover from "@/assets/images/repair.png";
//? API
import http from "@/services/WebpageService";
//? Packages
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
export default {
  components: { VueMultiselect },

  data() {
    return {
      v$: useValidate(),

      //? Inmage
      cover,

      //? Data
      equipments: [],
      rooms: [],

      //? Selected
      selected: "",
      isLoading: false,

      //? Radio button
      hadEquipId: "1", //? 1 = มีหมายเลขครุภัณฑ์, 2 = ไม่มีหมายเลขครุภัณฑ์

      //? Form values
      equipId: "",
      equipName: "",
      equipRoom: "",
      detail: "",
      notifierName: "",

      //? Form Image Upload
      imgUrl: "",
      file: null,
    };
  },

  watch: {
    selected(val) {
      if (val) {
        this.equipId = val.equip_id;
        this.equipName = val.name;
        this.equipRoom = val.room_id;
      }
    },

    hadEquipId(val) {
      if (val === "1") {
        if (this.equipName !== "" || this.equipRoom !== "") {
          this.equipName = "";
          this.equipRoom = "";
        }
      }

      if (val === "2") {
        if (this.selected !== "") {
          this.selected = "";
          this.equipId = "";
          this.equipName = "";
          this.equipRoom = "";
        }
      }
    },
  },

  async mounted() {
    await this.getUserProfile();
    this.getEquipmentsAndRooms();
  },

  methods: {
    //? Get user profile
    async getUserProfile() {
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

      try {
        let user = JSON.parse(localStorage.getItem("user"));
        let citizenId = user.card_id;
        const res = await http.get(`student/search/citizen-id/${citizenId}`);
        if (res?.data?.success) {
          let data = res.data.data;
          this.notifierName = data.name_th;
        } else {
          //! Error not found user
          swalWithBootstrapButtons
            .fire("ไม่พบข้อมูลผู้ใช้", "", "error")
            .then(() => {
              this.$router.push({ name: "StudentService" });
            });
        }
      } catch (e) {
        swalWithBootstrapButtons
          .fire("เกิดข้อผิดพลาด", "", "error")
          .then(() => {
            this.$router.push({ name: "StudentService" });
          });
      }
    },

    //? Get all equipments and rooms
    async getEquipmentsAndRooms() {
      try {
        //? Set loadind true
        this.isLoading = true;
        //? Get all equipments
        const response = await http.get("equipments/all");
        //? Get all rooms
        const response2 = await http.get("rooms/all");
        if (response.data.success && response2.data.success) {
          this.equipments = response.data.data;
          this.rooms = response2.data.data;
          //? Set loading false
          this.isLoading = false;
        }
      } catch (error) {
        console.log(error);
      }
    },

    //? Custom label for multiselect
    customLabel({ name, equip_id }) {
      return `${equip_id} - ${name}`;
    },

    //? On image upload change
    onFileChange(e) {
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

      this.file = e.target.files[0];

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

    //? Reset form
    handleReset() {
      this.v$.$reset();
      this.selected = "";
      this.hadEquipId = "1";
      this.equipId = "";
      this.equipName = "";
      this.equipRoom = "";
      this.detail = "";
      this.imgUrl = "";
      this.file = null;
      this.$refs.fileupload.value = "";
      this.getUserProfile();
    },

    //? Submit form
    handleSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.saveData();
      }
    },

    async saveData() {
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
        showCancelButton: false,
        timer: 1500,
        timerProgressBar: true,
      });

      //? Set form data
      let data = new FormData();
      data.append("equip_name", this.equipName);
      data.append("room", this.equipRoom);
      data.append("initial_symptoms", this.detail);
      data.append("notifier_name", this.notifierName);

      if (this.hadEquipId === "1") {
        data.append("equip_id", this.equipId);
      } else {
        data.append("equip_id", "");
      }

      if (this.file) {
        data.append("image", this.file);
      } else {
        data.append("image", "");
      }

      try {
        const response = await http.post("equipment/repair/new", data);
        if (response.data.success) {
          let msg = response.data.message;
          swalWithBootstrapButtons
            .fire({
              title: msg,
              icon: "success",
              confirmButtonText: "ตกลง",
            })
            .then(() => {
              //? Reset form
              this.handleReset();
            });
        }
      } catch (error) {
        let errMsg = error?.response?.data?.message;
        if (errMsg) {
          swalWithBootstrapButtons.fire("ข้อมูลไม่ถูกต้อง!", errMsg, "error");
          return;
        }

        swalWithBootstrapButtons.fire(
          "ข้อมูลไม่ถูกต้อง!",
          "กรุณาตรวจสอบข้อมูลอีกครั้ง",
          "error"
        );
      }
    },
  },

  validations() {
    return {
      selected: {
        required: helpers.withMessage("กรุณากรอกรหัสครุภัณฑ์", () => {
          if (this.hadEquipId === "1") {
            return this.selected !== "";
          } else {
            return true;
          }
        }),
      },

      equipName: {
        required: helpers.withMessage("กรุณากรอกชื่อของครุภัณฑ์", required),
      },

      equipRoom: {
        required: helpers.withMessage("กรุณาเลือกห้อง", required),
      },

      detail: {
        required: helpers.withMessage("กรุณากรอกรายละเอียด", required),
      },

      notifierName: {
        required: helpers.withMessage("กรุณากรอกชื่อผู้แจ้ง", required),
      },
    };
  },
};
</script>

<style>
.select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-bottom: 1px solid;
  background-color: transparent;
}
</style>
