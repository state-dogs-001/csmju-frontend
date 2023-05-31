<template>
  <main class="profile-page custom">
    <section class="relative pb-16 bg-blueGray-200">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div
            class="cssanimation sequence fadeInBottom relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
          >
            <div class="px-6 mt-6">
              <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                <div class="w-auto px-4 rounded-lg bg-emerald-500">
                  <h3 class="text-6xl font-semibold leading-normal text-white">
                    CSMJU
                  </h3>
                </div>
                <div class="w-auto ml-3">
                  <h3 class="mt-1 text-2xl font-semibold">
                    ระบบสารสนเทศสาขาวิชาวิทยาการคอมพิวเตอร์
                  </h3>

                  <h3 class="text-xl font-normal">
                    | Management Information System
                  </h3>
                </div>
              </div>

              <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                <div class="flex flex-wrap">
                  <!-- Curriculum Vitae (CV) -->
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <router-link to="service/cv">
                        <img
                          :src="cover1"
                          class="w-full cropped-service align-middle rounded-t-lg text-blueGray-500"
                        />
                        <div class="relative p-4">
                          <h4 class="text-xl font-bold text-left">
                            นำออกประวัติโดยย่อ
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md">
                              Curriculum Vitae (CV)
                            </h4>
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>

                  <!-- Maintenance System -->
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <router-link to="service/maintenance">
                        <img
                          :src="cover2"
                          class="w-full cropped-service align-middle rounded-t-lg text-blueGray-500"
                        />
                        <div class="relative p-4">
                          <h4 class="text-xl font-bold text-left">
                            ระบบแจ้งซ่อมอุปกรณ์
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md">
                              Maintenance System
                            </h4>
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>

                  <!-- Equipment Recovery System -->
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <router-link to="/personnel/service/equipment/recovery">
                        <img
                          :src="cover4"
                          class="w-full cropped-service align-middle rounded-t-lg text-blueGray-500"
                        />
                        <div class="relative p-4">
                          <h4 class="text-xl font-bold text-left">
                            ระบบยืม-คืนครุภัณฑ์
                          </h4>
                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md">
                              Equipment Recovery System
                            </h4>
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>

                  <!-- Equipment Recovery History -->
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                    v-show="stateRecoveryHistory"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <router-link
                        to="/personnel/service/equipment/recovery/history"
                      >
                        <img
                          :src="cover4"
                          class="w-full cropped-service align-middle rounded-t-lg text-blueGray-500"
                        />
                        <div class="relative p-4">
                          <h4 class="text-xl font-bold text-left">
                            ประวัติการยืม-คืนครุภัณฑ์
                          </h4>
                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md">
                              Equipment Recovery History
                            </h4>
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>

                  <!-- Material Disbursement System -->
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <router-link to="/personnel/service/material">
                        <img
                          :src="cover5"
                          class="w-full cropped-service align-middle rounded-t-lg text-blueGray-500"
                        />
                        <div class="relative p-4">
                          <h4 class="text-xl font-bold text-left">
                            ระบบเบิกจ่ายอุปกรณ์
                          </h4>
                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md">
                              Material Disbursement System
                              {{ stateRecoveryHistory }}
                            </h4>
                          </div>
                        </div>
                      </router-link>
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
</template>

<script>
//? Images
import cover1 from "@/assets/images/cv.png";
import cover2 from "@/assets/images/repair.png";
import cover3 from "@/assets/images/room_rent.png";
import cover4 from "@/assets/images/equipment.png";
import cover5 from "@/assets/images/material.png";
//? Service
import http from "@/services/WebpageService";
export default {
  data() {
    return {
      //? Images
      cover1,
      cover2,
      cover3,
      cover4,
      cover5,

      //? Data
      personnelCitizenId: "",

      //? State
      stateRecoveryHistory: false,
    };
  },

  async mounted() {
    await this.getUserData();
    await this.getRecoveryData();
  },

  methods: {
    //? Get User Data
    async getUserData() {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        this.personnelCitizenId = user?.card_id;
      } catch (e) {}
    },

    //? get recovery data
    async getRecoveryData() {
      try {
        let formData = new FormData();
        formData.append("citizen_id", this.personnelCitizenId);
        const res = await http.post(
          "equipment/borrow/filter-by-citizen-id?page=1",
          formData
        );
        if (res?.data?.data.length > 0) {
          //? If has data set state to true
          this.stateRecoveryHistory = true;
        }
      } catch (e) {}
    },

    //! Alert System not yet
    dev() {
      const Swal = this.$swal.mixin({
        position: "center",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        customClass: {
          title:
            "custom font-semibold text-4xl text-center text-blueGray-500 mb-2",
          text: "custom font-normal text-lg text-center text-blueGray-500 ",
        },
      });
      Swal.fire({
        icon: "info",
        title: `Coming Soon`,
        text: `" ระบบจะเปิดให้ใช้งานในอนาคต " `,
      });
    },
  },
};
</script>
