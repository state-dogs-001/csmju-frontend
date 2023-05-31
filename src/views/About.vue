<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 min-h-screen mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            เกี่ยวกับเรา
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            About Us
          </p>
        </div>

        <div class="py-6 mt-10 border-t border-blueGray-200">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 lg:w-12/12">
              <!-- Link -->
              <ul class="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none">
                <li
                  class="flex-auto mr-2 -mb-px text-center last:mr-0"
                  v-for="about in aboutLink"
                  :key="about"
                >
                  <router-link
                    :to="about.link"
                    v-slot="{ href, navigate, isActive }"
                  >
                    <a
                      :href="href"
                      @click="navigate"
                      class="block px-5 py-3 font-bold leading-normal uppercase rounded shadow-lg"
                      :class="[
                        isActive
                          ? 'text-white bg-emerald-500'
                          : 'text-emerald-500 bg-white',
                      ]"
                    >
                      <i class="mr-1 text-base fas fa-bullseye"></i>
                      {{ about.name }}
                    </a>
                  </router-link>
                </li>
              </ul>

              <!-- Contents -->
              <div class="relative flex flex-col w-full">
                <div class="flex-auto px-0 py-5">
                  <div
                    class="text-justify tab-content tab-space text-blueGray-700"
                  >
                    <div >
                      <router-view />
                    </div>
                  </div>
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
export default {
  data() {
    return {
      openTab: 0,

      //? Data
      aboutLink: [
        {
          link: "/about/history",
          name: "ประวัติความเป็นมา",
        },
        {
          link: "/about/philosophy",
          name: "ปรัชญา",
        },
        {
          link: "/about/importance",
          name: "ความสำคัญ",
        },
        {
          link: "/about/objectivity",
          name: "วัตถุประสงค์",
        },
        {
          link: "/about/plo",
          name: "ผลการเรียนรู้ (PLO)",
        },
      ],
    };
  },

  methods: {},
};
</script>
