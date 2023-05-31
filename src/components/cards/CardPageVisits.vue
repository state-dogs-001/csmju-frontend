<template>
  <div
    class="custom relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg"
  >
    <div class="px-4 py-3 mb-0 border-0 rounded-t">
      <div class="flex flex-wrap items-center">
        <div class="relative flex-1 flex-grow w-full max-w-full px-4">
          <h3 class="text-base font-semibold text-blueGray-700">
            ผู้ใช้งานเข้าสู่ระบบ
            <span class="italic text-emerald-600 text-sm">
              ( จำนวน {{ total }} บัญชี )
            </span>
          </h3>
        </div>
      </div>
    </div>
    <!-- Table -->
    <div class="w-full overflow-hidden overflow-x-auto rounded-lg shadow-xs">
      <div class="w-full overflow-x-auto">
        <table class="w-full whitespace-no-wrap">
          <thead>
            <tr>
              <th
                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
              >
                ชื่อผู้ใช้งาน
              </th>
              <th
                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
              >
                ประเภทผู้ใช้งาน
              </th>
              <th
                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
              >
                วันที่ / เวลา
              </th>
              <th
                class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
              >
                อุปกรณ์ที่ใช้งาน
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in userLogin" :key="index">
              <td
                class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
              >
                {{ user.email }}
              </td>
              <td
                class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
              >
                {{ user.user_type }}
              </td>
              <td
                class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
              >
                {{ new Date(user.created_at).toLocaleDateString() }}
                <p class="text-sm text-emerald-600 font-semibold">
                  {{ new Date(user.created_at).toString().split(" ")[4] }}
                </p>
              </td>

              <td
                class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0"
              >
                {{ user.device }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Paginate -->
      <VueTailwindPagination
        :current="currentPage"
        :total="total"
        :per-page="perPage"
        @page-changed="onPageClick($event)"
      />
    </div>
  </div>
</template>

<script>
//? API
import http from "@/services/APIService";
//? Package
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
export default {
  data() {
    return {
      userLogin: null,

      //? Paginate
      total: 0,
      perPage: 0,
      currentPage: 0,
    };
  },

  components: { VueTailwindPagination },

  mounted() {
    this.currentPage = 1;
    this.getUsers(this.currentPage);
  },

  methods: {
    //? Get users login history
    async getUsers(pageNumber) {
      let users = await http.get(`checksignin/users?page=${pageNumber}`);
      if (users) {
        let data = users.data;
        this.userLogin = data.data;
        this.total = data.total;
        this.perPage = data.per_page;
        this.currentPage = data.current_page;
      }
    },

    //? Paginate
    onPageClick(event) {
      this.currentPage = event;
      this.getUsers(this.currentPage);
    },
  },
};
</script>
