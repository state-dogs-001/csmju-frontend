<template>
  <div>
    <a href="#pablo" ref="btnDropdownRef" @click="toggleDropdown($event)">
      เกี่ยวกับ <i class="fa-sharp fa-solid fa-chevron-down"></i>
    </a>
    <div
      ref="popoverDropdownRef"
      class="z-50 float-left py-2 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <span
        class="block w-full px-4 pt-2 pb-0 text-sm font-bold bg-transparent whitespace-nowrap text-blueGray-400"
      >
        รู้จักกับเรา
      </span>
      <router-link
        @click="close($event)"
        v-for="about in aboutLink"
        :key="about"
        :to="about.link"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        {{ about.name }}
      </router-link>

      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />

      <span
        class="block w-full px-4 pt-2 pb-0 text-sm font-bold bg-transparent whitespace-nowrap text-blueGray-400"
      >
        อาคารเรียน
      </span>
      <router-link
        @click="close($event)"
        to="/classroom"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
      >
        อาคาร/ห้องเรียน
      </router-link>

      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />

      <span
        class="block w-full px-4 pt-2 pb-0 text-sm font-bold bg-transparent whitespace-nowrap text-blueGray-400"
      >
        บุคลากร
      </span>
      <router-link
        @click="close($event)"
        to="/teacher"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        คณาจารย์
      </router-link>
      <router-link
        @click="close($event)"
        to="/staff"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        เจ้าหน้าที่
      </router-link>

      <div class="h-0 mx-4 my-2 border border-solid border-blueGray-100" />

      <span
        class="block w-full px-4 pt-2 pb-0 text-sm font-bold bg-transparent whitespace-nowrap text-blueGray-400"
      >
        โครงการ
      </span>
      <router-link
        @click="close($event)"
        to="/schedule"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent hover:text-emerald-600 whitespace-nowrap text-blueGray-700"
      >
        ตารางกิจกรรม
      </router-link>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
export default {
  data() {
    return {
      dropdownPopoverShow: false,

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
  
  methods: {
    toggleDropdown(e) {
      e.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },

    close(e) {
      if (!this.$el.contains(e.target)) {
        this.dropdownPopoverShow = false;
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.close);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
</script>
