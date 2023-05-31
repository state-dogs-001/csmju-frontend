<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3
            class="mb-2 text-3xl font-semibold leading-normal text-blueGray-700"
          >
            {{ news.title }}
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            วันที่ประกาศ :
            {{ new Date(news.created_at).toLocaleDateString() }} | ประเภทข่าว :
            {{ news.type }}
          </p>
        </div>

        <div class="pt-6 mt-10 border-t border-blueGray-200"></div>

        <div class="flex flex-wrap">
          <div class="w-full px-2 pb-4">
            <div
              class="relative flex flex-col w-full min-w-0 mb-6 break-words max-h-news h-full"
            >
              <div class="px-0 mt-2 lg:px-10">
                <!-- Poster -->
                <img
                  v-if="news.poster"
                  :src="news.poster"
                  class="max-h-400-px rounded-lg center-img shadow-lg border"
                />

                <!-- Detail -->
                <h3 class="mt-8 font-semibold mb-4">รายละเอียดข่าว :</h3>
                <p class="rem2 whitespace-normal text-justify leading-norma">
                  {{ news.detail }}
                </p>

                <!-- Images -->
                <h3 class="mt-8 font-semibold mb-4" v-if="newsImages">
                  รูปภาพที่เกี่ยวข้อง :
                </h3>
                <div
                  v-if="newsImages && newsImages.length > 3"
                  class="w-full flex flex-col justify-center items-center"
                >
                  <div class="w-full lg:w-8/12">
                    <Carousel
                      id="gallery"
                      :items-to-show="1"
                      :wrap-around="true"
                      :autoplay="this.speed"
                      v-model="currentSlide"
                    >
                      <Slide v-for="slide in newsImages" :key="slide">
                        <div class="carousel__item">
                          <img
                            :src="slide.image"
                            class="rounded-t-lg cropped-bg-sm md:cropped-bg-md"
                          />
                        </div>
                      </Slide>
                    </Carousel>

                    <Carousel
                      id="thumbnails"
                      :items-to-show="2"
                      :wrap-around="true"
                      v-model="currentSlide"
                      ref="carousel"
                      class="md:block hidden"
                    >
                      <Slide v-for="(slide, index) in newsImages" :key="index">
                        <div class="cursor-pointer" @click="slideTo(index - 1)">
                          <img
                            :src="slide.image"
                            class="cropped-bg-thumbnail"
                          />
                        </div>
                      </Slide>
                    </Carousel>
                  </div>
                </div>

                <div
                  v-if="newsImages && newsImages.length <= 3"
                  class="w-full flex flex-wrap"
                >
                  <div
                    class="w-full lg:w-4/12 pr-2 pb-2 flex justify-center"
                    v-for="item in newsImages"
                    :key="item"
                  >
                    <img
                      :src="item.image"
                      class="rounded-lg cropped-bg-thumbnail break-words duration-150 ease-linear hover:zoom"
                    />
                  </div>
                </div>

                <!-- Link -->
                <template v-if="news.link">
                  <h3 class="mt-8 font-semibold mb-4">ลิงค์ที่เกี่ยวข้อง :</h3>
                  <a
                    :href="news.link"
                    target="_blank"
                    class="whitespace-normal text-justify leading-norma"
                  >
                    {{ news.link }}
                  </a>
                </template>

                <!-- Back button -->
                <div class="mt-10 text-center">
                  <router-link
                    to="/news"
                    class="px-6 py-3 mb-1 mr-4 text-sm font-bold bg-emerald-500 text-white rounded-lg break-words duration-150 ease-linear hover:zoom focus:outline-none"
                  >
                    ย้อนกลับ
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//? Packages
import { mapActions, mapGetters } from "vuex";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default {
  computed: {
    ...mapGetters("news", ["news"]),
    newsImages() {
      if (!this.news.images) return;
      return this.news.images;
    },
  },

  components: {
    Carousel,
    Slide,
  },

  data() {
    return {
      id: this.$route.params.id,

      //? Carousel
      currentSlide: 0,
      speed: 3000,
    };
  },

  mounted() {
    this.getNewsById();
  },

  methods: {
    //? Get news by id
    ...mapActions("news", ["getNews"]),
    async getNewsById() {
      await this.getNews(this.id);
    },

    //? Carousel
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>
