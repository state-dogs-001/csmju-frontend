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
                      to="/personnel/service"
                      class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    >
                      ย้อนกลับ
                    </router-link>
                  </div>
                </div>
              </div>

              <!-- Form Search -->
              <div class="w-full py-3 mt-10">
                <form @submit.stop.prevent="handleSearch">
                  <div class="flex flex-wrap w-full">
                    <input
                      type="text"
                      v-model="keyword"
                      class="border-none bg-blueGray-300 rounded-lg mr-2"
                      placeholder="ค้นหาชื่ออุปกรณ์"
                    />
                    <button
                      type="submit"
                      class="py-2 px-2 text-white bg-emerald-500 rounded-lg transition-all duration-150 ease-linear active:bg-emerald-600 outline-none hover:shadow-md focus:outline-none"
                    >
                      ค้นหา <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </form>
              </div>

              <!-- Table -->
              <div class="mt-5 text-center border-t border-blueGray-200">
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
                              class="px-4 py-3 w-1/12 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                            >
                              ลำดับ
                            </th>
                            <th
                              class="px-4 py-3 w-42 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                            >
                              รูปภาพ
                            </th>
                            <th
                              class="px-4 py-3 w-auto text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                            >
                              ชื่ออุปกรณ์
                            </th>
                            <th
                              class="px-4 py-3 w-auto text-sm font-semibold text-center uppercase align-middle whitespace-nowrap"
                            >
                              จำนวนที่เหลือ
                            </th>
                            <th
                              class="px-4 py-3 w-auto text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                            >
                              จัดการ
                            </th>
                          </tr>
                        </thead>
                        <tbody class="text-left w-full">
                          <tr
                            class="border-b"
                            v-for="(material, index) in materials"
                            :key="index"
                          >
                            <td
                              class="px-4 py-3 text-sm align-middle whitespace-nowrap"
                            >
                              {{ (currentPage - 1) * perPage + index + 1 }}
                            </td>
                            <td
                              class="px-4 py-3 text-sm align-middle whitespace-nowrap"
                            >
                              <img
                                :src="material?.image ?? logo"
                                :alt="'รูปของ' + material.name"
                                class="rounded-lg"
                              />
                            </td>

                            <td
                              class="px-4 py-3 text-sm align-middle whitespace-nowrap"
                            >
                              {{ material.name }}
                            </td>

                            <td
                              class="px-4 py-3 text-sm text-center align-middle whitespace-nowrap"
                            >
                              {{ material.quantity }}
                            </td>
                            <td
                              class="px-4 py-3 text-xs align-middle whitespace-nowrap"
                            >
                              <button
                                @click="onPickUp(material.id)"
                                class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white transition-all duration-150 ease-linear bg-blue-500 rounded-lg shadow-md outline-none active:bg-blue-700 hover:shadow-md focus:outline-none"
                                type="button"
                              >
                                ขอเบิก <i class="fa-solid fa-box-open"></i>
                              </button>
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
//? Service
import http from "@/services/WebpageService";
//? Package
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
//? Image
import logo from "@/assets/images/logo.png";
export default {
  components: {
    VueTailwindPagination,
  },

  data() {
    return {
      //? Image
      logo,

      //? Form
      keyword: "",

      //? Data
      materials: [],

      //? Pagination
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },

  watch: {
    currentPage(change) {
      if (change) {
        this.keyword ? this.searchMaterial(change) : this.getMaterial(change);
      }
    },

    keyword(val) {
      if (!val) {
        this.currentPage = 1;
        this.getMaterial(this.currentPage);
      }
    },
  },

  async mounted() {
    this.currentPage = 1;
    await this.getMaterial(this.currentPage);
  },

  methods: {
    async getUser() {
      let user = JSON.parse(localStorage.getItem("user"));
    },

    async getMaterial(page) {
      try {
        const res = await http.get(`materials?page=${page}`);
        if (res?.data?.data?.length > 0) {
          let data = res.data;
          this.materials = data.data;
          this.currentPage = data.current_page;
          this.perPage = data.per_page;
          this.total = data.total;
        } else {
          this.materials = [];
          this.currentPage = 0;
          this.perPage = 0;
          this.total = 0;
        }
      } catch (e) {
        console.log(e);
      }
    },

    async searchMaterial(page) {
      try {
        const res = await http.get(
          `material/search/${this.keyword}?page=${page}`
        );
        if (res?.data?.data?.length > 0) {
          let data = res.data;
          this.materials = data.data;
          this.currentPage = data.current_page;
          this.perPage = data.per_page;
          this.total = data.total;
        } else {
          this.materials = [];
          this.currentPage = 0;
          this.perPage = 0;
          this.total = 0;
        }
      } catch (e) {
        console.log(e);
      }
    },

    handleSearch() {
      if (!!this.keyword) {
        this.currentPage = 1;
        this.searchMaterial(this.currentPage);
      }
    },

    onPickUp(id) {
      this.$router.push({
        name: "PersonnelMaterialDisbursement",
        params: {
          id: id,
        },
      });
    },

    onPageChanged(page) {
      this.currentPage = page;
    },
  },
};
</script>
