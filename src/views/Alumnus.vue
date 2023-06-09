<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            ศิษย์เก่า
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Student Alumnus
          </p>
        </div>

        <div class="py-6 mt-10 text-center border-t border-blueGray-200">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 lg:w-9/12"></div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center">
          <div
            v-for="alum in alumnus"
            :key="alum.id"
            class="w-full h-full lg:w-3/12 mr-2 my-2"
          >
            <div
              class="flex flex-col items-center w-full min-w-0 break-words border rounded-lg bg-blueGray-100"
            >
              <div class="p-4">
                <img
                  alt="Image profile"
                  :src="alum.image_profile"
                  class="p-2 align-middle cropped-alum-profile rounded-full bg-blueGray-200 shadow-md"
                />
              </div>
              <div class="relative w-full px-4 rounded-b bg-blueGray-100">
                <div class="relative py-4">
                  <div calss="">
                    <p
                      class="px-2 pt-2 mb-1 text-lg font-bold text-center text-white border-2 rounded-lg shadow-lg text-shadow h-70-px bg-emerald-500 border-blueGray-300"
                    >
                      {{ alum.job_title }}
                    </p>
                  </div>
                  <div class="mt-2">
                    <p
                      class="px-2 mb-2 mt-2 pt-2 text-center font-normal border-b border-white h-50-px text-blueGray-700 text-md"
                    >
                      <i class="fas fa-briefcase"></i>
                      {{ alum.work_place }}
                    </p>
                  </div>
                  <div>
                    <h4
                      class="text-lg font-semibold text-center text-blueGray-700"
                    >
                      {{ alum.name }}
                    </h4>
                    <p
                      class="mb-2 font-normal text-center text-blueGray-700 text-md"
                    >
                      ศิษย์เก่าวิทย์คอม รุ่นที่ {{ alum.generation }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <VueTailwindPagination
          :current="currentPage"
          :total="total"
          :per-page="perPage"
          @page-changed="onPageChange($event)"
          class="my-6"
        />
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/services/AuthService";
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import staticAlumnus from "@/json/alumnus";
export default {
  components: {
    VueTailwindPagination,
  },

  data() {
    return {
      //? Data
      staticAlumnus,

      //? Pagination
      alumnus: [],
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },

  watch: {
    //? Watch page change
    currentPage(newPage) {
      if (newPage) {
        this.getAlumnus(newPage);
      }
    },
  },

  mounted() {
    //? For onload page setting default page equal 1
    this.currentPage = 1;
    //? Call function get data when load page
    this.getAlumnus(this.currentPage);
  },

  methods: {
    async getAlumnus(page) {
      try {
        const res = await http.get(`alumnus/public?page=${page}`);
        let data = res?.data;
        this.alumnus = data.data;
        //? Use for pagination
        this.currentPage = data.current_page;
        this.perPage = data.per_page;
        this.total = data.total;
      } catch (e) {
        this.getOfflineAlumnus(page);
      }
    },

    async getOfflineAlumnus(page) {
      //? Use for pagination
      this.currentPage = page;
      this.perPage = 9;
      this.total = this.staticAlumnus.length;
      //? Slice data for pagination
      let start = (this.currentPage - 1) * this.perPage;
      let end = start + this.perPage;
      this.alumnus = this.staticAlumnus.slice(start, end);
    },

    //? Pagination
    onPageChange(page) {
      this.currentPage = page;
    },
  },
};
</script>
