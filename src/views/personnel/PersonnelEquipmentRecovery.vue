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
                    ระบบยืม-คืนครุภัณฑ์
                  </h3>
                  <h3 class="text-xl font-normal">
                    | Equipment Recovery System
                  </h3>
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
                  <div class="w-full lg:w-6/12 lg:order-2">
                    <div class="p-4">
                      <img :src="cover" class="shadow-none" alt="" />
                    </div>
                  </div>
                  <!-- Form -->
                  <div class="w-full lg:w-6/12 lg:order-1">
                    <form @submit.prevent="handleSubmit">
                      <!-- Equipments -->
                      <div
                        class="flex flex-wrap"
                        v-for="(rc, index) in recoveryList"
                        :key="index"
                      >
                        <!-- Equipment name -->
                        <div class="w-full px-4 mt-4 md:w-6/12">
                          <label class="block text-gray-700 text-md"
                            >ครุภัณฑ์ที่ต้องการยืม
                            <span class="text-red-500">*</span></label
                          >
                          <input
                            v-model="rc.equip_list"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            type="text"
                            placeholder="ครุภัณฑ์ที่ต้องการยืม"
                          />
                          <div
                            v-if="v$.recoveryList.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.recoveryList.$errors[0].$message[index][0] }}
                          </div>
                        </div>

                        <!-- Quantity -->
                        <div class="w-full px-4 mt-4 md:w-4/12">
                          <label class="block text-gray-700 text-md"
                            >จำนวนที่ต้องการยืม
                            <span class="text-red-500">*</span></label
                          >
                          <input
                            v-model="rc.quantity"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            type="text"
                            placeholder="จำนวนที่ต้องการยืม"
                          />
                          <div
                            v-if="v$.recoveryList.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.recoveryList.$errors[0].$message[index][1] }}
                          </div>
                        </div>

                        <!-- Buttons add or remove field -->
                        <div
                          class="w-full px-4 mt-4 flex items-center justify-center md:w-2/12"
                        >
                          <button
                            @click="
                              handleAddRecoveryList(index, rc, recoveryList)
                            "
                            class="px-3 py-2 mr-2 text-sm font-bold text-white transition-all duration-150 ease-linear rounded-full shadow-lg outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                          <button
                            v-show="
                              (recoveryList.length > 1 && index !== 0) ||
                              rc.equip_list !== '' ||
                              rc.quantity !== ''
                            "
                            @click="
                              handleRemoveRecoveryList(index, recoveryList)
                            "
                            class="px-3 py-2 text-sm font-bold text-white transition-all duration-150 ease-linear rounded-full shadow-lg outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                            type="button"
                          >
                            <i class="fas fa-minus"></i>
                          </button>
                        </div>
                      </div>

                      <!-- Select date use type -->
                      <div class="flex flex-wrap">
                        <div class="w-full px-4 mt-4 md:w-6/12">
                          <div class="block my-3 text-gray-700 text-md">
                            ระยะเวลาการยืม <span class="text-red-500">*</span>
                          </div>
                          <label
                            class="inline-flex items-center cursor-pointer my-4 mr-4"
                          >
                            <input
                              type="radio"
                              v-model="timePeriod"
                              value="1"
                              class="w-5 h-5 transition-all duration-150 ease-linear border-0 bg-gray-200 text-blueGray-700"
                            />
                            <span class="ml-2 text-sm text-blueGray-600">
                              วันเดียว
                            </span>
                          </label>
                          <label
                            class="inline-flex items-center cursor-pointer my-4"
                          >
                            <input
                              type="radio"
                              v-model="timePeriod"
                              value="2"
                              class="w-5 h-5 transition-all duration-150 ease-linear border-0 bg-gray-200 text-blueGray-700"
                            />
                            <span class="ml-2 text-sm text-blueGray-600">
                              มากกว่า 1 วัน
                            </span>
                          </label>
                        </div>
                      </div>

                      <!-- Single date time period = 1 -->
                      <div
                        class="flex flex-wrap mb-4"
                        :class="{ hidden: !timePeriod || timePeriod === '2' }"
                      >
                        <div class="w-full px-4 mt-2 md:w-6/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >วันที่ยืม
                            <span class="text-red-500">*</span></label
                          >
                          <v-date-picker
                            v-model="useDate"
                            mode="date"
                            :masks="mask"
                            :min-date="new Date()"
                          >
                            <template #default="{ inputValue, inputEvents }">
                              <input
                                class="w-full px-3 py-2 text-gray-700 focus:outline-none"
                                :value="inputValue"
                                v-on="inputEvents"
                                placeholder="วันที่ยืม"
                                readonly
                              />
                            </template>
                          </v-date-picker>
                          <div
                            v-if="v$.useDate.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.useDate.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Date range time period = 2 -->
                      <div
                        class="mb-4"
                        :class="{ hidden: !timePeriod || timePeriod === '1' }"
                      >
                        <v-date-picker
                          v-model="useDates"
                          mode="date"
                          is-range
                          :masks="mask"
                          :min-date="new Date()"
                          class="flex flex-wrap"
                        >
                          <template
                            v-slot="{ inputValue, inputEvents, isDragging }"
                          >
                            <!-- Date start -->
                            <div class="w-full px-4 md:w-6/12 mt-2">
                              <label class="block my-3 text-gray-700 text-md"
                                >วันที่ยืม
                                <span class="text-red-500">*</span></label
                              >
                              <input
                                class="w-full px-3 py-2 text-gray-700 focus:outline-none"
                                :class="
                                  isDragging ? 'text-gray-600' : 'text-gray-900'
                                "
                                :value="inputValue.start"
                                v-on="inputEvents.start"
                                placeholder="วันที่ยืม"
                                readonly
                              />
                              <div
                                v-if="v$.useDates.start.$error"
                                class="mt-2 text-sm text-red-500"
                              >
                                {{ v$.useDates.start.$errors[0].$message }}
                              </div>
                            </div>

                            <!-- Date end -->
                            <div class="w-full px-4 md:w-6/12 mt-2">
                              <label class="block my-3 text-gray-700 text-md"
                                >วันที่สิ้นสุดการยืม
                                <span class="text-red-500">*</span></label
                              >
                              <input
                                class="w-full px-3 py-2 text-gray-700 focus:outline-none"
                                :class="
                                  isDragging ? 'text-gray-600' : 'text-gray-900'
                                "
                                :value="inputValue.end"
                                v-on="inputEvents.end"
                                placeholder="วันที่สิ้นสุดการยืม"
                                disabled
                              />
                              <div
                                v-if="v$.useDates.end.$error"
                                class="mt-2 text-sm text-red-500"
                              >
                                {{ v$.useDates.end.$errors[0].$message }}
                              </div>
                            </div>
                          </template>
                        </v-date-picker>
                      </div>

                      <!-- Use for -->
                      <div class="flex flex-wrap">
                        <div class="w-full px-4 md:w-12/12 mt-2">
                          <label class="block my-3 text-gray-700 text-md"
                            >ใช้ในกิจกรรม
                            <span class="text-red-500">*</span></label
                          >
                          <textarea
                            v-model="useFor"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            rows="3"
                            placeholder="วัตถุประสงค์ในการยืมครุภัณฑ์ ใช้ในกิจกรรม..."
                          ></textarea>
                          <div
                            v-if="v$.useFor.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.useFor.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- tel number -->
                      <div class="flex flex-wrap">
                        <div class="w-full px-4 mt-2 md:w-6/12">
                          <label
                            class="block my-3 text-gray-700 text-md"
                            for="telNumber"
                            >เบอร์โทรติดต่อ
                            <span class="text-red-500">*</span></label
                          >
                          <input
                            v-model="telNumber"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                            type="text"
                            placeholder="เบอร์โทรติดต่อ"
                          />
                          <div
                            v-if="v$.telNumber.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.telNumber.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Buttons -->
                      <div class="flex flex-wrap justify-center mt-12 mb-6">
                        <button
                          @click="handleReset"
                          class="px-4 py-3 mr-2 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow-lg outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-broom"></i> ล้าง
                        </button>
                        <button
                          class="px-4 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow-lg outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
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
//? Image
import cover from "@/assets/images/equipment.png";
//? Service
import http from "@/services/WebpageService";
//? Packages
import useValidate from "@vuelidate/core";
import {
  required,
  numeric,
  minLength,
  minValue,
  helpers,
} from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),

      //? Image
      cover,

      //? Calendar mask
      mask: {
        input: "YYYY-MM-DD",
      },

      //? Form
      citizenId: "",
      recoveryList: [
        {
          equip_list: "",
          quantity: "",
        },
      ],
      timePeriod: "1",
      useDate: null, //? Single date
      useDates: {
        start: null,
        end: null,
      }, //? Multiple date
      useFor: "",
      telNumber: "",
    };
  },

  watch: {
    //? Watch time period change and reset date
    timePeriod(val) {
      if (val === "1") {
        this.useDates = {
          start: null,
          end: null,
        };
      } else {
        this.useDate = null;
      }
    },
  },

  async mounted() {
    await this.getUserData();
  },

  methods: {
    //? Get user data from local storage
    async getUserData() {
      const user = JSON.parse(localStorage.getItem("user"));
      this.citizenId = user?.card_id;
    },

    //? Add recovery list field
    handleAddRecoveryList(index, input, array) {
      if (input.equip_list && input.quantity) {
        let obj = {
          equip_list: "",
          quantity: "",
        };
        array.push(obj);
      }
    },

    //? Remove recovery list field
    handleRemoveRecoveryList(index, array) {
      //? If array length is 1, clear data
      if (array.length === 1) {
        array[index].equip_list = "";
        array[index].quantity = "";
        return;
      }
      //? Remove data from array
      array.splice(index, 1);
    },

    //? Submit form
    handleSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let data = new FormData();
        data.append("tel_number", this.telNumber);
        data.append("use_for", this.useFor);
        data.append("pn_citizen_id", this.citizenId);

        //? Date use condition
        if (this.timePeriod === "1") {
          //? Single date
          data.append(
            "date_use_start",
            new Date(this.useDate).toISOString().slice(0, 10)
          );
        } else {
          //? Multiple date
          let dateStart = new Date(this.useDates.start)
            .toISOString()
            .slice(0, 10);
          let dateEnd = new Date(this.useDates.end).toISOString().slice(0, 10);
          data.append("date_use_start", dateStart);
          data.append("date_use_end", dateEnd);
        }

        //? Recovery list loop
        this.recoveryList.forEach((item, index) => {
          if (!item.equip_list || !item.quantity) return;
          data.append(`recoveries[${index}][equip_list]`, item.equip_list);
          data.append(`recoveries[${index}][quantity]`, item.quantity);
        });

        //? Send data to API
        this.sendData(data);
      }
    },

    //? Reset form
    handleReset() {
      this.v$.$reset();
      this.telNumber = "";
      this.recoveryList = [
        {
          equip_list: "",
          quantity: "",
        },
      ];
      this.timePeriod = "1";
      this.useDate = null;
      this.useDates = {
        start: null,
        end: null,
      };
      this.useFor = "";
    },

    //? Send data to API
    async sendData(data) {
      //? Set Alert Style
      const Swal = this.$swal.mixin({
        position: "center",
        showConfirmButton: false,
        timer: 1200,
        timerProgressBar: true,
        customClass: {
          title: "font-semibold custom text-blueGray-600",
        },
      });

      try {
        const res = await http.post("equipment/borrow/new", data);
        if (res.data.success) {
          Swal.fire({
            icon: "success",
            title: "บันทึกข้อมูลสำเร็จ",
          }).then(() => {
            //? Reset fields
            this.handleReset();
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "บันทึกข้อมูลไม่สำเร็จ",
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
  },

  validations() {
    return {
      recoveryList: {
        $each: helpers.forEach({
          equip_list: {
            required: helpers.withMessage(
              "กรุณาเลือกอุปกรณ์ที่ต้องการยืม",
              required
            ),
          },
          quantity: {
            required: helpers.withMessage(
              "กรุณากรอกจำนวนอุปกรณ์ที่ต้องการยืม",
              required
            ),
            numeric: helpers.withMessage(
              "กรุณากรอกจำนวนอุปกรณ์เป็นตัวเลข",
              numeric
            ),
            minValue: helpers.withMessage(
              "กรุณากรอกจำนวนอุปกรณ์มากกว่า 0",
              minValue(1)
            ),
          },
        }),
      },
      useDate: {
        required: helpers.withMessage("กรุณาเลือกวันที่ต้องการยืม", () => {
          if (this.timePeriod === "1") {
            if (this.useDate) {
              return true;
            } else {
              return false;
            }
          }
          return true;
        }),
      },
      useDates: {
        start: {
          required: helpers.withMessage("กรุณาเลือกวันที่ต้องการยืม", () => {
            if (this.timePeriod === "2") {
              if (this.useDates.start) {
                return true;
              } else {
                return false;
              }
            }
            return true;
          }),
        },
        end: {
          required: helpers.withMessage("กรุณาเลือกวันที่ต้องการยืม", () => {
            if (this.timePeriod === "2") {
              if (this.useDates.end) {
                return true;
              } else {
                return false;
              }
            }
            return true;
          }),
        },
      },
      useFor: {
        required: helpers.withMessage("กรุณากรอกวัตถุประสงค์การยืม", required),
      },
      telNumber: {
        required: helpers.withMessage("กรุณากรอกเบอร์โทรศัพท์", required),
        numeric: helpers.withMessage(
          "กรุณากรอกเบอร์โทรศัพท์เป็นตัวเลข",
          numeric
        ),
        minLength: helpers.withMessage(
          "กรุณากรอกเบอร์โทรศัพท์ 10 หลัก",
          minLength(10)
        ),
      },
    };
  },
};
</script>
