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
            {{ activityStore.name }}
          </h3>
          <div
            class="flex flex-row flex-wrap justify-center px-4 font-semibold leading-normal text-md text-blueGray-500"
          >
            <div class="mr-auto">
              วันที่จัดกิจกรรม :
              {{ new Date(activityStore.date_start).toLocaleDateString() }}
              <span v-show="!!activityStore.date_end"
                >ถึง
                {{
                  new Date(activityStore.date_end).toLocaleDateString()
                }}</span
              >
            </div>
            <div>รูปแบบกิจกรรม : {{ activityStore.location }}</div>
          </div>
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
                  v-if="activityStore.poster"
                  :src="activityStore.poster"
                  class="max-h-400-px rounded-lg center-img shadow-lg border"
                />

                <!-- Detail -->
                <h3 class="mt-8 font-semibold mb-4">รายละเอียดกิจกรรม :</h3>
                <p class="rem2 whitespace-normal text-justify leading-norma">
                  {{ activityStore.detail }}
                </p>

                <!-- Link -->
                <template v-if="activityStore.link !== null">
                  <h3 class="mt-8 font-semibold mb-4">ลิงค์กิจกรรม :</h3>
                  <a :href="activityStore.link" class="hover:text-emerald-600">
                    {{ activityStore.link }}
                  </a>
                </template>

                <!-- Images -->
                <h3 class="mt-8 font-semibold mb-4" v-if="activityImages">
                  รูปภาพที่เกี่ยวข้อง :
                </h3>
                <div
                  v-if="activityImages && activityImages.length > 3"
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
                      <Slide v-for="slide in activityImages" :key="slide">
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
                      <Slide
                        v-for="(slide, index) in activityImages"
                        :key="index"
                      >
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
                  v-if="activityImages && activityImages.length <= 3"
                  class="w-full flex flex-wrap"
                >
                  <div
                    class="w-full lg:w-4/12 pr-2 pb-2 flex justify-center"
                    v-for="item in activityImages"
                    :key="item"
                  >
                    <img
                      :src="item.image"
                      class="rounded-lg cropped-bg-thumbnail break-words duration-150 ease-linear hover:zoom"
                    />
                  </div>
                </div>

                <!-- Back button -->
                <div class="mt-10 text-center">
                  <router-link
                    to="/schedule"
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

  computed: {
    ...mapGetters("schedule", ["activityStore"]),
    activityImages() {
      if (!this.activityStore.images) return;
      return this.activityStore.images;
    },
  },

  async mounted() {
    await this.getActivityStore(this.id);
  },

  methods: {
    ...mapActions("schedule", ["getActivity"]),
    async getActivityStore(id) {
      await this.getActivity(id);
    },

    //? Carousel
    slideTo(val) {
      this.currentSlide = val;
    },
  },
};
</script>
