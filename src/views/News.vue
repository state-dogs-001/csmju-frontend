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
            ข่าวสาร / ประชาสัมพันธ์
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            News & Announcement
          </p>
        </div>

        <div class="pt-6 mt-10 border-t border-blueGray-200"></div>

        <template v-if="newsData">
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

          <div class="w-full p-4" v-if="newsData.length > 0">
            <div class="flex flex-wrap">
              <div
                v-for="feed in newsData"
                :key="feed.id"
                class="w-full px-2 py-2 pb-4 lg:w-4/12"
              >
                <div
                  class="flex flex-col w-full min-w-0 h-560-px mb-8 break-words duration-150 ease-linear shadow-lg rounded-lg bg-white hover:zoom"
                >
                  <div
                    class="cursor-pointer"
                    @click="handleReadMoreClick(feed.id)"
                  >
                    <img
                      :src="feed.poster"
                      :alt="feed.title"
                      class="rounded-t-lg cropped-news"
                    />
                  </div>
                  <div
                    class="w-8/12 -mt-6 px-5 py-2 text-md font-bold text-white bg-emerald-600 rounded-r-lg"
                  >
                    วันที่ {{ new Date(feed.created_at).toLocaleDateString() }}
                  </div>
                  <div class="p-5">
                    <div
                      class="cursor-pointer"
                      @click="handleReadMoreClick(feed.id)"
                    >
                      <div class="text-gray-900 font-bold text-xl mb-2 text-truncate-2">
                        {{ feed.title }}
                      </div>
                    </div>
                    <div class="font-normal text-gray-700 mb-3 text-truncate-4">
                      {{ feed.detail }}
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <button
                      class="px-2 py-4 w-24 break-words duration-150 ease-linear bg-emerald-600 text-white rounded-lg hover:zoom focus:outline-none"
                      @click="handleReadMoreClick(feed.id)"
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
                ขออภัย ไม่พบข้อมูลของข่าวสาร หรือ ประชาสัมพันธ์
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
  computed: {
    ...mapGetters("news", ["newsArray"]),
    newsData() {
      return this.newsArray.data;
    },
  },

  components: {
    VueTailwindPagination,
  },

  data() {
    return {
      //? Image
      noContent,

      //? Search
      keyword: "",

      //? Paginate
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },

  mounted() {
    //? Setting default current page when page loaded
    this.currentPage = 1;
    //? Call function get data
    this.getNewsStore(this.currentPage);
  },

  updated() {
    this.currentPage = this.newsArray.current_page;
    this.perPage = this.newsArray.per_page;
    this.total = this.newsArray.total;
  },

  watch: {
    keyword(val) {
      //? Watch keyword if empty then call getNewsStore
      if (!val) {
        this.currentPage = 1;
        this.getNewsStore(this.currentPage);
      }
    },
  },

  methods: {
    //? Get data
    ...mapActions("news", ["getNewsArray", "getNewsArraySearch"]),
    async getNewsStore(page) {
      await this.getNewsArray(page);
    },

    //? Handle router to detail news
    handleReadMoreClick(id) {
      this.$router.push({ name: "NewsExplain", params: { id: id } });
    },

    //? Handle search
    handleSearch() {
      if (this.keyword) {
        this.currentPage = 1;
        this.getNewsByKeyWord(this.currentPage, this.keyword);
      }
    },

    //? Get data by keyword
    async getNewsByKeyWord(page, keyword) {
      await this.getNewsArraySearch({
        page: page,
        keyword: keyword,
      });
    },

    //? Paginate
    async onPageChanged(page) {
      this.currentPage = page;
      if (this.keyword) {
        await this.getNewsByKeyWord(this.currentPage, this.keyword);
      } else {
        await this.getNewsStore(this.currentPage);
      }
    },
  },
};
</script>
