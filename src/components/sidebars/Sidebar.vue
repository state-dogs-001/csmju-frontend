<template>
  <nav
    class="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl custom md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-68"
  >
    <div
      class="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap"
    >
      <!-- Toggler -->
      <button
        class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="inline-block p-4 px-0 mr-0 font-bold text-left uppercase text-md md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
        to="/admin"
      >
        CSMJU | Administrator
      </router-link>
      <!-- User -->
      <ul class="flex flex-wrap items-center list-none md:hidden">
        <li class="relative inline-block">
          <admin-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="absolute top-0 left-0 right-0 z-40 items-center flex-1 h-auto overflow-x-hidden overflow-y-auto rounded shadow md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="inline-block p-4 px-0 mr-0 font-bold text-left uppercase text-md md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                to="/admin"
              >
                Admin's Menu
              </router-link>
            </div>
            <div class="flex justify-end w-6/12">
              <button
                type="button"
                class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Form -->
        <!-- <form class="mt-6 mb-4 md:hidden">
          <div class="pt-0 mb-3">
            <input
              type="text"
              placeholder="Search"
              class="w-full h-12 px-3 py-2 text-base font-normal leading-snug bg-white border-solid rounded shadow-none outline-none border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 focus:outline-none"
            />
          </div>
        </form> -->

        <hr class="my-4 md:min-w-full" />

        <h6
          class="block pt-1 pb-4 font-bold no-underline uppercase text-md md:min-w-full text-blueGray-500"
        >
          การจัดการเว็บไซต์
        </h6>
        <ul class="flex flex-col list-none md:flex-col md:min-w-full">
          <li
            class="items-center"
            v-for="link in manageWebsiteLinks"
            :key="link"
          >
            <router-link :to="link.link" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm"
                  :class="[
                    link.icon,
                    isActive ? 'opacity-75' : 'text-blueGray-300',
                  ]"
                ></i>
                {{ link.name }}
              </a>
            </router-link>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
        <h6
          class="block pt-1 pb-4 font-bold no-underline uppercase text-md md:min-w-full text-blueGray-500"
        >
          ข้อมูลผู้ใช้งานระบบ
        </h6>
        <ul class="flex flex-col list-none md:flex-col md:min-w-full">
          <li class="items-center" v-for="link in userInfoLinks" :key="link">
            <router-link :to="link.link" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm"
                  :class="[
                    link.icon,
                    isActive ? 'opacity-75' : 'text-blueGray-300',
                  ]"
                ></i>
                {{ link.name }}
              </a>
            </router-link>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
        <h6
          class="block pt-1 pb-4 font-bold no-underline uppercase text-md md:min-w-full text-blueGray-500"
        >
          การจัดการระบบสารสนเทศ
        </h6>
        <ul class="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
          <li class="items-center" v-for="link in infoManageLinks" :key="link">
            <router-link :to="link.link" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold uppercase"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm"
                  :class="[
                    link.icon,
                    isActive ? 'opacity-75' : 'text-blueGray-300',
                  ]"
                ></i>
                {{ link.name }}
              </a>
            </router-link>
          </li>
        </ul>

        <hr class="my-4 md:min-w-full" />
        <h6
          class="block pt-1 pb-4 font-bold no-underline uppercase text-md md:min-w-full text-blueGray-500"
        >
          การจัดการระบบสารสนเทศ (ระบบแจ้งเตือน)
        </h6>
        <ul class="flex flex-col list-none md:flex-col md:min-w-full md:mb-4">
          <li
            class="items-center"
            v-for="link in infoManageResponseLinks"
            :key="link"
          >
            <router-link :to="link.link" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-bold"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="mr-2 text-sm"
                  :class="[
                    link.icon,
                    isActive ? 'opacity-75' : 'text-blueGray-300',
                  ]"
                ></i>
                {{ link.name }}
              </a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
//? Component
import AdminDropdown from "../dropdowns/AdminDropdown.vue";
export default {
  components: {
    AdminDropdown,
  },
  data() {
    return {
      collapseShow: "hidden",

      //? Links
      manageWebsiteLinks: [
        {
          name: "ศูนย์การแสดงผล",
          link: "/admin/dashboard",
          icon: "fas fa-globe",
        },
        {
          name: "การแสดงรูปภาพเคลื่อนไหว",
          link: "/admin/banner",
          icon: "fas fa-tv",
        },
        {
          name: "การแสดงเอกสาร",
          link: "/admin/documentshow",
          icon: "fa-solid fa-file",
        },
        {
          name: "การแสดงข้อมูลหลักสูตร",
          link: "/admin/subjectshow",
          icon: "fas fa-address-book",
        },
        {
          name: "การแสดงข้อมูลห้อง",
          link: "/admin/roomshow",
          icon: "fas fa-building",
        },
      ],
      userInfoLinks: [
        {
          name: "จัดการสิทธิ์ผู้ดูแลระบบ",
          link: "/admin/permission",
          icon: "fa-solid fa-user-pen",
        },
        {
          name: "ข้อมูลบุคลากร",
          link: "/admin/personnelshow",
          icon: "fas fa-user-tie",
        },
        {
          name: "ข้อมูลนักศึกษา",
          link: "/admin/studentshow",
          icon: "fas fa-user-graduate",
        },
      ],
      infoManageLinks: [
        {
          name: " ระบบประกาศข่าวสาร",
          link: "/admin/feed",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบข้อมูลศิษย์เก่า",
          link: "/admin/alumnusshow",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบครุภัณฑ์",
          link: "/admin/equipmentshow",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบแจ้งซ่อม",
          link: "/admin/repairshow",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบยืม-คืนครุภัณฑ์",
          link: "/admin/equipment/recovery",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบบันทึกกิจกรรม",
          link: "/admin/activityshow",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบบันทึกการเข้าร่วมกิจกรรม",
          link: "/admin/activitydoc/show",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบสืบค้นโครงงาน",
          link: "/admin/projectshow",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบวัสดุอุปกรณ์",
          link: "/admin/materialshow",
          icon: "fas fa-check-circle",
        },
        {
          name: "ระบบเบิกจ่ายวัสดุอุปกรณ์",
          link: "/admin/material-disbursement",
          icon: "fas fa-check-circle",
        },
      ],
      infoManageResponseLinks: [
        {
          name: " ระบบจัดการ Line token",
          link: "/admin/linetokenshow",
          icon: "fas fa-mail-bulk",
        },
        {
          name: "ระบบแจ้งตกค้างรายวิชา",
          link: "/admin/coursealertshow",
          icon: "fas fa-mail-bulk",
        },
        {
          name: "ระบบการติดต่อกลับ",
          link: "/admin/complaining",
          icon: "fas fa-mail-bulk",
        },
      ],
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      //? Toggle collapse
      this.collapseShow = classes;

      //? Close collapse on route change
      this.$router.afterEach(() => {
        this.collapseShow = "hidden";
      });
    },
  },
};
</script>
