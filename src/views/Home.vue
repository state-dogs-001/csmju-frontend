<template>
  <div class="w-full bg-blueGray-200">
    <!-- Navbar -->
    <main-navbar />
    <main>
      <!-- Header -->
      <div
        class="relative flex items-center content-center justify-center pt-16 custom min-h-screen-75"
      >
        <!-- Image Header -->
        <div class="top-0 w-full h-full bg-center bg-cover">
          <img
            alt="Background home page"
            :src="BgHome"
            class="relative mx-0 shadow-lg cropped center-img"
          />
        </div>

        <!-- Contents inside image header -->
        <div class="container absolute">
          <div class="flex flex-wrap -mt-20">
            <!-- Text -->
            <div class="w-full px-4 mt-32 xl:w-6/12">
              <div class="pr-12 flex-wrap">
                <h1
                  class="cssanimation sequence fadeInBottom text-home font-semibold text-white"
                >
                  สาขาวิชาวิทยาการคอมพิวเตอร์
                </h1>
                <h2
                  class="cssanimation sequence fadeInBottom mt-0 text-4xl text-blueGray-200"
                >
                  คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
                </h2>
              </div>
              <div class="my-6 rectangle" id="section1"></div>
              <div class="flex flex-wrap">
                <div
                  class="mt-2 mr-2 text-lg text-blueGray-200 item-center duration-150 ease-linear hover:text-emerald-600 hover:zoom-xs"
                >
                  <i class="px-2 far fa-play-circle fa-lg"></i>
                  <a href="#section2">รับชมวีดีโอแนะนำ</a>
                </div>
                <div class="border-l-2 mx-4"></div>
                <div
                  class="text-lg mt-2 text-blueGray-200 item-center duration-150 ease-linear hover:text-emerald-600 hover:zoom-xs"
                >
                  <i class="px-2 fas fa-arrow-down fa-lg"></i>
                  <a href="qrcode"> ดาวน์โหลดแอปพลิเคชัน CSMJU </a>
                </div>
              </div>
            </div>

            <!-- Banner -->
            <div class="w-full mt-6 xl:w-6/12">
              <div class="top-0 w-full h-full bg-center bg-cover">
                <Carousel
                  v-if="banners.length > 0"
                  :autoplay="this.speed"
                  :wrap-around="true"
                >
                  <Slide v-for="banner in banners" :key="banner.id">
                    <div
                      class="cssanimation sequence fadeInBottom relative mx-0 shadow-lg"
                    >
                      <a :href="banner.link" target="_blank">
                        <img
                          class="cropped-bg-sm rounded-lg sm:cropped-bg"
                          :src="banner.banner"
                        />
                      </a>
                    </div>
                  </Slide>
                  <!-- Next and Previous Button -->
                  <template #addons>
                    <pagination />
                  </template>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contents -->
      <section class="pb-20 xl:-mt-64 custom">
        <div class="container mx-auto">
          <!-- Menu -->
          <div class="px-6 pt-2 md:pt-20 mt-12 mb-12 flex flex-wrap">
            <!-- Main menu 1 -->
            <div class="w-full px-4 md:w-6/12">
              <router-link to="/program">
                <div
                  class="relative w-full min-w-0 mb-8 break-words duration-150 ease-linear rounded-custom bg-white shadow-lg hover:zoom"
                >
                  <div class="flex-auto p-1">
                    <img
                      alt="Program"
                      :src="Menu1"
                      class="relative mx-0 shadow-lg lg:cropped-card1 rounded-custom"
                    />
                  </div>
                </div>
              </router-link>
            </div>
            <!-- Main menu 2 -->
            <div class="w-full px-4 md:w-6/12">
              <a href="http://www.admissions.mju.ac.th/" target="_blank">
                <div
                  class="relative w-full min-w-0 mb-8 break-words duration-150 ease-linear rounded-custom bg-white shadow-lg hover:zoom"
                >
                  <div class="flex-auto p-1">
                    <img
                      alt="Admissions"
                      :src="Menu2"
                      class="relative mx-0 shadow-lg lg:cropped-card1 rounded-custom"
                    />
                  </div>
                </div>
              </a>
            </div>

            <!-- Sub menu -->
            <div
              class="w-full px-4 md:w-4/12"
              v-for="item in subMenu"
              :key="item"
            >
              <router-link :to="item.link">
                <div
                  class="w-full min-w-0 mb-8 break-words duration-150 ease-linear rounded-custom bg-white shadow-lg hover:zoom"
                >
                  <div class="flex-auto p-1">
                    <img
                      :alt="item.alt"
                      :src="item.image"
                      class="relative mx-0 shadow-lg lg:cropped-card2 rounded-custom"
                    />
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          <!-- News and update -->
          <template v-if="newsLimit.length > 0">
            <h1 class="px-6 pt-2 md:pt-20 text-3xl">
              <b>News Update</b> | ข่าวสารล่าสุด
            </h1>
            <div class="flex flex-wrap mt-12 mb-12">
              <div
                class="w-full px-4 md:w-6/12 lg:w-4/12"
                v-for="feed in newsLimit"
                :key="feed.id"
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
                      <div
                        class="text-gray-900 font-bold text-xl mb-2 text-truncate-2"
                      >
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
              <div class="flex items-center justify-center w-full pt-8">
                <router-link
                  to="/news"
                  class="px-2 py-4 duration-150 ease-linear border rounded-lg bg-emerald-600 text-white focus:outline-none hover:zoom"
                  >ดูข่าวสารทั้งหมด <i class="fas fa-newspaper"
                /></router-link>
              </div>
            </div>
          </template>

          <!-- Curriculum -->
          <h1 class="px-6 pt-2 md:pt-20 text-3xl">
            <b>Curriculum </b> | หลักสูตร
          </h1>
          <div class="mt-12 mb-12">
            <card-home-edu />
          </div>

          <!-- Introduction YouTube embed -->
          <h1 class="px-6 pt-2 md:pt-20 text-3xl" id="section2">
            <b>Introduction </b> | วีดีโอแนะนำสาขา
          </h1>
          <div class="flex flex-wrap mt-12 mb-12">
            <div class="px-4 w-full h-350-px md:h-600-px md:w-12/12">
              <iframe
                class="top-0 left-0 w-full h-full rounded-lg shadow-lg"
                :src="embled"
                title="Presentation | Com-Sci MJU 2020"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <main-footer />
  </div>
</template>

<script>
//? Components
import MainNavbar from "@/components/navbars/MainNavbar.vue";
import MainFooter from "@/components/footers/HomeFooter.vue";
import CardHomeEdu from "@/components/cards/CardHomeEdu.vue";
//? Import images
import BgHome from "@/assets/images/bg-home.png";
import Menu1 from "@/assets/images/menu1.png";
import Menu2 from "@/assets/images/menu2.png";
import Menu3 from "@/assets/images/menu3.png";
import Menu4 from "@/assets/images/menu4.png";
import Menu5 from "@/assets/images/menu5.png";
//? Package
import { Carousel, Pagination, Slide } from "vue3-carousel";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    MainNavbar,
    MainFooter,
    CardHomeEdu,

    //? Carousel
    Carousel,
    Slide,
    Pagination,
  },

  computed: {
    ...mapGetters("banner", ["banners"]),
    ...mapGetters("news", ["newsLimit"]),
  },

  data() {
    return {
      //?  Carousel
      speed: 5000, //? Speed of the carousel is 5 seconds

      //? Images
      BgHome,
      Menu1,
      Menu2,
      subMenu: [
        {
          image: Menu3,
          link: "/about",
          alt: "About",
        },
        {
          image: Menu4,
          link: "/schedule",
          alt: "Activity",
        },
        {
          image: Menu5,
          link: "/contact",
          alt: "Contact",
        },
      ],

      //? Youtube Embed
      embled: "https://www.youtube.com/embed/88JeU0ShY60",
    };
  },

  async mounted() {
    await this.setIntoGuard();
    await this.getBanners();
    await this.getNewsLimit();
  },

  methods: {
    //? Set state
    async setIntoGuard() {
      let localData = { state: 1 };
      localStorage.setItem("into", JSON.stringify(localData));
    },

    //? Get banner
    ...mapActions("banner", ["getBanners"]),
    ...mapActions("news", ["getNewsLimit"]),

    //? Read more
    handleReadMoreClick(id) {
      this.$router.push({ name: "NewsExplain", params: { id: id } });
    },
  },
};
</script>
