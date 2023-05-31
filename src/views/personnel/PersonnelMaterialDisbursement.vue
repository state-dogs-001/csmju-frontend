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
                    ระบบเบิกจ่ายอุปกรณ์
                  </h3>

                  <h3 class="text-xl font-normal">
                    | Material Disbursement System
                  </h3>
                </div>
                <div class="w-full lg:w-3/12">
                  <div class="mt-4 text-right">
                    <router-link
                      to="/personnel/service/material"
                      class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    >
                      ย้อนกลับ
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                <div class="flex flex-wrap">
                  <!-- Image icon -->
                  <div class="w-full lg:w-6/12 lg:order-2">
                    <div class="p-4">
                      <img :src="icon" class="shadow-none" alt="" />
                    </div>
                  </div>

                  <!-- Form -->
                  <div class="w-full lg:w-6/12 lg:order-1">
                    <form @submit.stop.prevent="handleSubmit">
                      <!-- Material image -->
                      <div class="flex flex-wrap mb-4" v-show="image">
                        <div class="w-full flex justify-center px-4 md:w-12/12">
                          <img
                            :src="image"
                            class="w-full rounded-lg md:w-6/12"
                          />
                        </div>
                      </div>

                      <!-- Material name -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4 md:w-12/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >ชื่อวัสดุ</label
                          >
                          <input
                            v-model="name"
                            class="w-full px-3 py-2 leading-tight bg-blueGray-200 text-gray-700 border-none rounded-lg"
                            type="text"
                            placeholder="ชื่อวัสดุ"
                            disabled
                          />
                        </div>
                      </div>

                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-4 md:w-6/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >จำนวนที่เหลือ</label
                          >
                          <input
                            v-model="quantity"
                            class="w-full px-3 py-2 leading-tight bg-blueGray-200 text-gray-700 border-none rounded-lg"
                            type="text"
                            placeholder="จำนวนที่เหลือ"
                            disabled
                          />
                        </div>

                        <div class="w-full px-4 md:w-6/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >จำนวนที่เบิกจ่าย</label
                          >
                          <select
                            v-model="disbursement"
                            class="w-full px-3 py-2 leading-tight text-gray-700"
                          >
                            <option value="" selected disabled>
                              จำนวนที่เบิกจ่าย
                            </option>
                            <option v-for="i in quantity" :key="i" :value="i">
                              {{ i }}
                            </option>
                          </select>
                          <div
                            v-if="v$.disbursement.$error"
                            class="mt-2 text-sm text-red-500"
                          >
                            {{ v$.disbursement.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Buttons -->
                      <div class="py-6 text-center">
                        <button
                          @click="clearForm"
                          class="px-6 py-3 mb-1 mr-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
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
//? Service
import http from "@/services/WebpageService";
//? Images
import icon from "@/assets/images/material.png";
//? Packages
//? Packages
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),

      id: this.$route.params?.id,

      //? Image
      icon,

      //? Form
      name: "",
      quantity: 0,
      image: "",
      disbursement: "",
      userCitizenId: "",
    };
  },

  async mounted() {
    await this.getMaterial(this.id);
    this.getUser();
  },

  methods: {
    getUser() {
      try {
        let user = JSON.parse(localStorage.getItem("user"));
        this.userCitizenId = user.card_id;
      } catch (e) {}
    },

    async getMaterial(id) {
      try {
        const res = await http.get(`material/show/${id}`);
        if (res?.data?.success) {
          let data = res.data?.data;
          this.name = data.name;
          this.quantity = data.quantity;
          this.image = data.image;
        }
      } catch (e) {}
    },

    sendRequest() {
      //? Set default sweet alert
      const swalWithBootstrapButtons = this.$swal.mixin({
        customClass: {
          title: "font-weight-bold custom",
          confirmButton:
            "px-6 py-3 mx-4 mb-1 custom text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          cancelButton:
            "px-6 py-3 mx-4 mb-1 custom text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
        },
        buttonsStyling: false,
        allowOutsideClick: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: "ยืนยันการเบิกจ่าย",
          text: "คุณต้องการเบิกจ่ายวัสดุนี้ใช่หรือไม่",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            try {
              let data = new FormData();
              data.append("citizen_id", this.userCitizenId);
              data.append("material_id", this.id);
              data.append("quantity", this.disbursement);
              const res = await http.post("material/disbursal/new", data);
              if (res?.data?.success) {
                swalWithBootstrapButtons.fire(
                  "เบิกจ่ายสำเร็จ",
                  "เบิกจ่ายวัสดุสำเร็จ",
                  "success"
                );
                this.$router.push({ name: "PersonnelMaterial" });
              } else {
                swalWithBootstrapButtons
                  .fire("เบิกจ่ายไม่สำเร็จ", "เบิกจ่ายวัสดุไม่สำเร็จ", "error")
                  .then(() => {
                    window.location.reload();
                  });
              }
            } catch (err) {
              let errMsg = err?.response?.data?.message;
              if (errMsg) {
                swalWithBootstrapButtons
                  .fire("เกิดข้อผิดพลาด", errMsg, "error")
                  .then(() => {
                    window.location.reload();
                  });
                return;
              }

              swalWithBootstrapButtons
                .fire("เกิดข้อผิดพลาด", "ทำรายการไม่สำเร็จ", "error")
                .then(() => {
                  window.location.reload();
                });
            }
          } else {
            swalWithBootstrapButtons.fire(
              "ยกเลิก",
              "ยกเลิกการเบิกจ่ายวัสดุ",
              "info"
            );
          }
        });
    },

    handleSubmit() {
      this.v$.$validate();
      if (this.v$.$error) return;
      this.sendRequest();
    },

    clearForm() {
      this.disbursement = "";
      this.v$.$reset();
    },
  },

  validations() {
    return {
      disbursement: {
        required: helpers.withMessage("กรุณาเลือกจำนวนที่เบิกจ่าย", required),
      },
    };
  },
};
</script>
