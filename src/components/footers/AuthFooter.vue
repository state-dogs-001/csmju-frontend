<template>
  <footer
    class="pb-6"
    :class="[
      absolute ? 'absolute w-full bottom-0 bg-blueGray-800' : 'relative',
    ]"
  >
    <div class="container px-4 mx-auto">
      <hr class="mb-6 border-b-1 border-blueGray-600" />
      <div
        class="flex flex-wrap items-center justify-center md:justify-between"
      >
        <div class="w-full px-4 flex flex-wrap justify-center">
          <div
            class="py-1 text-sm font-semibold text-center text-blueGray-500 md:text-left"
          >
            Copyright © {{ years }}
            <span
              class="py-1 text-sm font-semibold text-white hover:text-blueGray-300"
            >
              Computer Science MJU
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      years: new Date().getFullYear(),
    };
  },
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
