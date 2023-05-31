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
                      Library
                    </h3>
                  </div>
                </div>

                <div class="w-full lg:w-6/12">
                  <h3 class="mt-1 text-2xl font-semibold">
                    ระบบห้องสมุดค้นคว้าโครงงาน
                  </h3>

                  <h3 class="text-xl font-normal">| Project Library System</h3>
                </div>

                <!-- Back to main service -->
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

              <!-- Form Search -->
              <div class="w-full py-3 mt-10">
                <form @submit.stop.prevent="handleSearch">
                  <div class="flex flex-wrap w-full">
                    <input
                      type="text"
                      v-model="keyword"
                      class="border-none bg-blueGray-300 rounded-lg mr-2"
                      placeholder="ค้นหาโครงงาน"
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
                              class="px-4 py-3 w-auto text-sm font-semibold text-center align-middle whitespace-nowrap"
                            >
                              รหัสโครงงาน
                            </th>
                            <th
                              class="px-4 py-3 w-96 text-sm font-semibold text-left align-middle whitespace-nowrap"
                            >
                              ชื่อโครงงาน
                            </th>
                            <th
                              class="px-4 py-3 w-auto text-sm font-semibold text-center align-middle whitespace-nowrap"
                            >
                              ปีการศึกษา
                            </th>
                            <th
                              class="px-4 py-3 w-auto text-sm font-semibold text-left align-middle whitespace-nowrap"
                            >
                              จัดการ
                            </th>
                          </tr>
                        </thead>
                        <tbody class="text-left w-full">
                          <tr
                            class="border-b"
                            v-for="(project, index) in projects"
                            :key="index"
                          >
                            <td
                              class="px-4 py-3 text-sm text-center align-middle whitespace-nowrap"
                            >
                              {{ project.project_code }}
                            </td>
                            <td
                              class="px-4 py-3 text-sm text-left align-middle flex flex-wrap"
                            >
                              <a
                                :href="project?.file"
                                target="_blank"
                                class="text-blue-500 hover:text-blue-600"
                                >{{ project?.name }}</a
                              >
                            </td>
                            <td
                              class="px-4 py-3 text-sm text-center align-middle whitespace-nowrap"
                            >
                              {{ project.years }}
                            </td>
                            <td
                              class="px-4 py-3 text-xs align-middle whitespace-nowrap"
                            >
                              <button
                                @click="seeMore(project?.id)"
                                class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white transition-all duration-150 ease-linear bg-emerald-500 rounded-lg shadow-md outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                                type="button"
                              >
                                อ่านเพิ่ม <i class="fa-solid fa-book-open"></i>
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
export default {
  components: {
    VueTailwindPagination,
  },

  data() {
    return {
      //? Data
      projects: [],

      //? Search
      keyword: "",

      //? Pagination
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },

  watch: {
    currentPage(changed) {
      if (changed) {
        this.keyword ? this.searchProject(changed) : this.getProjects(changed);
      }
    },

    keyword(val) {
      if (!val) {
        this.getProjects(this.currentPage);
      }
    },
  },

  async mounted() {
    this.currentPage = 1;
    await this.getProjects(this.currentPage);
  },

  methods: {
    async getProjects(page) {
      try {
        const res = await http.get(`projects?page=${page}`);
        let data = res?.data;
        if (data?.total > 0) {
          this.projects = data?.data;
          this.perPage = data?.per_page;
          this.total = data?.total;
          this.currentPage = data?.current_page;
        }
      } catch (e) {
        console.log(e);
      }
    },

    async searchProject(page) {
      try {
        let data = new FormData();
        data.append("keyword", this.keyword);
        const res = await http.post(`project/search?page=${page}`, data);
        data = res?.data;
        if (data?.total > 0) {
          this.projects = data?.data;
          this.perPage = data?.per_page;
          this.total = data?.total;
          this.currentPage = data?.current_page;
        }
      } catch (e) {}
    },

    handleSearch() {
      if (!!this.keyword) {
        this.currentPage = 1;
        this.searchProject(this.currentPage);
      }
    },

    onPageChanged(page) {
      this.currentPage = page;
    },

    seeMore(id) {
      this.$router.push({ name: "StudentProjectSeeMore", params: { id: id } });
    },
  },
};
</script>
