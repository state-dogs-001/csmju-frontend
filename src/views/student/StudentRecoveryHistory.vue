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
                      ประวัติการยืม-คืนครุภัณฑ์
                    </h3>
  
                    <h3 class="text-xl font-normal">
                      | Equipment Recovery History
                    </h3>
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
  
                <!-- Table -->
                <div class="py-5 mt-10 text-center border-t border-blueGray-200">
                  <div class="flex flex-wrap">
                    <div class="flex flex-auto mt-4 w-full overflow-x-auto">
                      <div class="block w-full overflow-x-auto lg:w-12/12">
                        <table
                          class="items-center w-full bg-transparent border-collapse"
                        >
                          <thead>
                            <tr
                              class="text-blueGray-500 border-b-2 border-blueGray-500"
                            >
                              <th
                                class="px-4 py-3 w-1/12 text-sm font-semibold text-center uppercase align-middle whitespace-nowrap"
                              >
                                ลำดับ
                              </th>
                              <th
                                class="px-4 py-3 w-3/12 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                              >
                                ระยะเวลาการยืม
                              </th>
                              <th
                                class="px-4 py-3 w-3/12 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                              >
                                รายละเอียดการยืม
                              </th>
                              <th
                                class="px-4 py-3 w-4/12 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                              >
                                วัตถุประสงค์ในการยืมครุภัณฑ์
                              </th>
                              <th
                                class="px-4 py-3 w-2/12 text-sm font-semibold text-center uppercase align-middle whitespace-nowrap"
                              >
                                สถานะการคืนครุภัณฑ์
                              </th>
                            </tr>
                          </thead>
                          <tbody class="text-left w-full">
                            <tr
                              class="border-b"
                              v-for="(item, index) in recoveries"
                              :key="index"
                            >
                              <td
                                class="py-3 px-4 text-sm text-center align-middle whitespace-nowrap"
                              >
                                {{ (currentPage - 1) * perPage + index + 1 }}
                              </td>
                              <td
                                class="py-3 px-4 text-sm align-middle whitespace-nowrap"
                              >
                                {{
                                  new Date(item.date_use_start)
                                    .toLocaleString()
                                    .slice(0, 10)
                                }}
                                <span v-if="item.date_use_end" class="ml-1">
                                  -
                                  {{
                                    new Date(item.date_use_end)
                                      .toLocaleString()
                                      .slice(0, 10)
                                  }}</span
                                >
                              </td>
                              <td
                                v-if="item.recovery_list"
                                class="py-3 px-4 text-sm"
                              >
                                <div
                                  v-for="list in item.recovery_list"
                                  :key="list"
                                  class="flex flex-col mb-2"
                                >
                                  <span class="mr-2">{{ list.equip_list }}</span>
                                  <span class="text-xs text-emerald-500">
                                    {{ list.quantity }} จำนวน
                                  </span>
                                </div>
                              </td>
                              <td
                                class="py-3 px-4 text-sm align-middle"
                              >
                                {{ item.use_for }}
                              </td>
                              <td
                                class="py-3 px-4 text-sm text-center align-middle whitespace-nowrap"
                              >
                                <span v-if="item.status" class="text-emerald-500"
                                  >คืนแล้ว</span
                                >
                                <span v-else class="text-red-500">ยังไม่คืน</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <VueTailwindPagination
                          :current="currentPage"
                          :total="total"
                          :per-page="perPage"
                          @page-changed="onPageChanged($event)"
                          class="my-6"
                        />
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
  //? Services
  import http from "@/services/WebpageService";
  //? Packages
  import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
  export default {
    components: { VueTailwindPagination },
  
    data() {
      return {
        studentCitizenId: "",
  
        //? Data
        recoveries: [],
  
        //? Pagination
        currentPage: 0,
        perPage: 0,
        total: 0,
      };
    },
  
    async mounted() {
      await this.getUserData();
      this.currentPage = 1;
      this.getRecoveries(this.currentPage);
    },
  
    methods: {
      async getUserData() {
        try {
          const user = JSON.parse(localStorage.getItem("user"));
          this.studentCitizenId = user?.card_id;
        } catch (e) {}
      },
  
      async getRecoveries(page) {
        try {
          let formData = new FormData();
          formData.append("citizen_id", this.studentCitizenId);
          const res = await http.post(
            `equipment/borrow/filter-by-citizen-id?page=${page}`,
            formData
          );
          let data = res?.data;
          if (data?.data.length > 0) {
            this.recoveries = data?.data;
            this.perPage = data?.per_page;
            this.total = data?.total;
            this.currentPage = data?.current_page;
          } else {
            //! Alert not found data and redirect to service page
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
              title: "ไม่พบข้อมูล",
              text: "ไม่พบข้อมูลการยืมครุภัณฑ์",
              icon: "error",
            }).then(() => {
              this.$router.push("/student/service");
            });
          }
        } catch (e) {
          console.error(e);
        }
      },
    },
  };
  </script>
  