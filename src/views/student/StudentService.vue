<template>
  <main class="profile-page custom">
    <section class="relative pb-16 bg-blueGray-200">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div
            class="cssanimation sequence fadeInBottom relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
          >
            <div class="px-6 mt-6">
              <div
                class="flex flex-wrap rounded-lg bg-blueGray-100 cssanimation sequence fadeInBottom"
              >
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
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <button
                        @click="
                          profile != null
                            ? goToPage('/student/service/course')
                            : popAlert()
                        "
                      >
                        <img
                          :src="cover1"
                          class="w-full cropped-service align-middle rounded-t-lg text-blueGray-500"
                        />

                        <div class="relative p-4">
                          <h4 class="text-xl font-bold text-left">
                            ระบบแจ้งตกค้างรายวิชา
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md">
                              Course Residualisation System
                            </h4>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                    v-if="residuals != null"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <button
                        @click="
                          profile != null
                            ? goToPage('/student/service/course/history')
                            : popAlert()
                        "
                      >
                        <img
                          :src="cover0"
                          class="w-full cropped-service align-middle rounded-t-lg text-blueGray-500"
                        />

                        <div class="relative p-4">
                          <h4 class="text-xl font-bold text-left">
                            ประวัติการแจ้งตกค้างรายวิชา
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md">
                              Course Residualisation History
                            </h4>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <button
                        @click="
                          profile != null
                            ? goToPage('/student/service/equipment/recovery')
                            : popAlert()
                        "
                      >
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
                      </button>
                    </div>
                  </div>
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                    v-if="recovery !== null"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <button
                        @click="
                          profile != null
                            ? goToPage(
                                '/student/service/equipment/recovery/history'
                              )
                            : popAlert()
                        "
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
                      </button>
                    </div>
                  </div>
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <button
                        @click="
                          profile != null
                            ? goToPage('/student/service/maintenance')
                            : popAlert()
                        "
                      >
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
                      </button>
                    </div>
                  </div>
                  <div
                    class="w-full px-2 lg:w-3/12 cssanimation sequence fadeInBottom"
                  >
                    <div
                      class="relative flex flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border rounded-lg shadow-lg max-h-news border-blueGray-300 hover:zoom-xs bg-blueGray-100"
                    >
                      <button
                        @click="
                          profile != null
                            ? goToPage('/student/service/project-library')
                            : popAlert()
                        "
                      >
                        <img
                          :src="cover3"
                          class="w-full cropped-service align-middle rounded-t-lg text-blueGray-500"
                        />

                        <div class="relative p-4">
                          <h4 class="text-xl font-bold text-left">
                            ระบบห้องสมุดค้นคว้าโครงงาน
                          </h4>

                          <div
                            class="mt-2 text-center border-t border-blueGray-200"
                          >
                            <h4 class="mt-2 font-normal text-left text-md">
                              Project Library System
                            </h4>
                          </div>
                        </div>
                      </button>
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
import cover0 from "@/assets/images/enroll_history.jpg";
import cover1 from "@/assets/images/enroll_class.png";
import cover2 from "@/assets/images/repair.png";
import cover3 from "@/assets/images/library.png";
import cover4 from "@/assets/images/equipment.png";
//? API
import http from "@/services/WebpageService";
export default {
  data() {
    return {
      //? Images
      cover0,
      cover1,
      cover2,
      cover3,
      cover4,

      //? Data
      profile: null,
      residuals: null,
      recovery: null,
    };
  },

  async mounted() {
    await this.checkStudent();
    this.getResidualsHistory();
    this.getRecoveryData();
  },

  methods: {
    //? Check student if not has data call popAlert function
    async checkStudent() {
      try {
        let user = JSON.parse(localStorage.getItem("user"));
        let citizenId = user?.card_id;
        const res = await http.get(`student/search/citizen-id/${citizenId}`);
        if (res.data.success) {
          this.profile = res.data.data;
        }
      } catch (err) {}
    },

    //? Get student residuals history
    async getResidualsHistory() {
      try {
        const citizenId = this.profile?.citizen_id;

        if (!citizenId) return;

        const res = await http.get(`residual/student/${citizenId}`);
        if (res.data.data.length > 0) {
          let data = res.data.data;
          this.residuals = data;
        } else {
          this.residuals = null;
        }
      } catch (err) {}
    },

    //? get recovery data
    async getRecoveryData() {
      try {
        const citizenId = this.profile?.citizen_id;

        if (!citizenId) return;

        let formData = new FormData();
        formData.append("citizen_id", citizenId);
        const res = await http.post(
          "equipment/borrow/filter-by-citizen-id?page=1",
          formData
        );
        if (res.data.data.length > 0) {
          this.recovery = res.data.data;
        }
      } catch (e) {}
    },

    //? Router to page
    goToPage(page) {
      this.$router.push(page);
    },

    //? Alert popup for update profile before use service
    popAlert() {
      const Swal = this.$swal.mixin({
        position: "center",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        customClass: {
          title: "custom",
        },
      });
      Swal.fire({
        icon: "warning",
        title: `กรุณากรอกข้อมูลส่วนตัวของท่านก่อนใช้งานระบบ`,
      }).then(() => {
        this.$router.push({ name: "StudentProfile" });
      });
    },

    //? Sys tem not yet
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
