<template>
  <div class="container px-4 mx-auto">
    <div
      class="flex flex-col w-full min-h-screen-50 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            โครงการ และ กิจกรรม
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Scheme of Activities
          </p>
        </div>

        <div class="pt-6 mt-10 border-t border-blueGray-200"></div>

        <template v-if="activities">
          <!-- Search -->
          <div class="w-full px-2 pb-6">
            <form @submit.stop.prevent="handleSearch">
              <div class="flex flex-row justify-center w-full">
                <input
                  v-model="keyword"
                  type="text"
                  placeholder="ค้นหา"
                  class="w-auto md:w-124 px-4 py-3 mr-1 text-sm text-gray-700 placeholder-gray-600 bg-blueGray-100 border-none rounded-lg"
                />
                <button
                  type="submit"
                  class="w-auto px-3 py-3 bg-emerald-500 text-white rounded-lg focus:outline-none"
                >
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </form>
          </div>

          <!-- Activities -->
          <div class="w-full p-4" v-if="activities.length > 0">
            <div class="flex flex-wrap">
              <!-- Activities -->
              <div
                class="w-full md:w-4/12 px-4 pb-4"
                v-for="activity in activities"
                :key="activity"
              >
                <div
                  class="flex flex-col w-full min-w-0 h-560-px mb-8 break-words duration-150 ease-linear shadow-lg rounded-lg bg-white hover:zoom"
                >
                  <div
                    class="cursor-pointer"
                    @click="handleReadMoreClick(activity.id)"
                  >
                    <img
                      :src="activity.poster"
                      :alt="activity.title"
                      class="rounded-t-lg cropped-news"
                    />
                  </div>
                  <div
                    class="flex flex-col w-8/12 -mt-6 px-5 py-2 text-md text-white bg-emerald-600 rounded-r-lg"
                  >
                    <span
                      >วันที่
                      {{ new Date(activity.date_start).toLocaleDateString() }}
                    </span>
                    <span v-show="activity.date_end">
                      ถึง
                      {{
                        new Date(activity.date_end).toLocaleDateString()
                      }}</span
                    >
                  </div>
                  <div class="p-4">
                    <div
                      class="cursor-pointer"
                      @click="handleReadMoreClick(activity.id)"
                    >
                      <div class="text-gray-900 font-bold text-xl mb-2 text-truncate-2">
                        {{ activity.name }}
                      </div>
                    </div>
                    <div class="font-normal text-gray-700 text-truncate-4">
                      {{ activity.detail }}
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <button
                      class="px-4 py-3 break-words duration-150 ease-linear bg-emerald-600 text-white rounded-lg hover:zoom focus:outline-none"
                      @click="handleReadMoreClick(activity.id)"
                    >
                      <span class="mr-2">อ่านต่อ</span>
                      <i class="fas fa-arrow-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <VueTailwindPagination
              :current="currentPage"
              :total="total"
              :per-page="perPage"
              @page-changed="onPageChanged($event)"
              class="my-6"
            />
          </div>

          <div class="w-full p-4" v-else>
            <div class="flex flex-col items-center w-full py-4">
              <div class="w-full md:w-3/12 mb-4">
                <img :src="noContent" alt="no content" />
              </div>
              <div class="w-full">
                <h3 class="text-blueGray-500 text-xl md:text-2xl text-center">
                  ขออภัย ไม่พบข้อมูลที่ค้นหา
                </h3>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="flex flex-col items-center w-full py-4">
            <div class="w-full md:w-3/12 mb-4">
              <img :src="noContent" alt="no content" />
            </div>
            <div class="w-full">
              <h3 class="text-blueGray-500 text-xl md:text-2xl text-center">
                ขออภัย ไม่พบข้อมูลของโครงการ และ กิจกรรม
              </h3>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
//? Packages
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import { mapActions, mapGetters } from "vuex";
//? Image
import noContent from "@/assets/images/page-not-found.png";
export default {
  components: {
    VueTailwindPagination,
  },

  data() {
    return {
      //? Image
      noContent,

      //? Form
      keyword: "",

      //? Pagination
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },

  computed: {
    ...mapGetters("schedule", ["activitiesStore"]),
    activities() {
      return this.activitiesStore?.data;
    },
  },

  watch: {
    keyword(val) {
      if (!val) {
        this.currentPage = 1;
        this.getActivitiesStore(this.currentPage);
      }
    },
  },

  async mounted() {
    this.currentPage = 1;
    await this.getActivitiesStore(this.currentPage);
  },

  async updated() {
    this.currentPage = await this.activitiesStore?.current_page;
    this.perPage = await this.activitiesStore?.per_page;
    this.total = await this.activitiesStore?.total;
  },

  methods: {
    ...mapActions("schedule", ["getActivities", "searchActivities"]),

    async getActivitiesStore(page) {
      await this.getActivities(page);
    },

    async getActivitiesByKeyword(page, keyword) {
      await this.searchActivities({
        page: page,
        keyword: keyword,
      });
    },

    handleSearch() {
      if (!!this.keyword) {
        this.currentPage = 1;
        this.getActivitiesByKeyword(this.currentPage, this.keyword);
      }
    },

    handleReadMoreClick(id) {
      this.$router.push({ name: "ScheduleExplain", params: { id: id } });
    },

    onPageChanged(page) {
      this.currentPage = page;
      if (!!this.keyword) {
        this.getActivitiesByKeyword(this.currentPage, this.keyword);
      } else {
        this.getActivitiesStore(this.currentPage);
      }
    },
  },
};
</script>
