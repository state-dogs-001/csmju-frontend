<template>
  <div class="flex">
    <div class="flex">
      <div class="p-2 mx-4 rounded-full shadow-lg bg-blueGray-100">
        <h4 class="px-4 font-semibold leading-normal text-md text-blueGray-500">
          ผู้ดูแลระบบ |
          <span class="text-lg text-blueGray-700">
            {{ this.title }} {{ this.name }}
          </span>
        </h4>
      </div>
    </div>
    <a
      class="block text-blueGray-500"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="flex items-center">
        <span
          class="inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-blueGray-200"
        >
          <img
            alt="Image profile"
            class="w-full align-middle border-none rounded-full shadow-lg"
            :src="image"
          />
        </span>
      </div>
    </a>

    <div
      ref="popoverDropdownRef"
      class="z-50 float-left py-2 text-base text-center list-none bg-white rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <button
        class="block w-full px-4 py-2 text-sm font-normal text-blueGray-700 bg-transparent hover:text-emerald-600 whitespace-nowrap"
        @click="goToDocPage"
      >
        ข้อมูล API
      </button>

      <div class="h-0 my-2 border border-solid border-blueGray-100" />

      <button
        @click="onClickLogout"
        class="block w-full px-4 py-2 text-sm font-semibold hover:text-emerald-600 bg-transparent whitespace-nowrap text-blueGray-700"
      >
        ออกจากระบบ <i class="fa-solid fa-door-open"></i>
      </button>
    </div>
  </div>
</template>

<script>
//? Package
import { createPopper } from "@popperjs/core";
//? API
import http from "@/services/APIService";
export default {
  data() {
    return {
      dropdownPopoverShow: false,

      image: "",
      title: "",
      name: "",
    };
  },

  methods: {
    getUser() {
      let user = JSON.parse(localStorage.getItem("user"));
      let citizenId = user.data.citizen_id;
      http
        .get(`personnel/search/citizen-id/${citizenId}`)
        .then((res) => {
          if (res.data.success) {
            this.image = res.data.data.image_profile;
            this.title = res.data.data.name_title;
            this.name = res.data.data.name_th;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    toggleDropdown: function (event) {
      event.preventDefault();
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

    goToDocPage() {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;
      window.open(import.meta.env.VITE_URL_BACKEND_DOC + token, '_blank');
    },

    onClickLogout() {
      http
        .post("auth/signout")
        .then((res) => {
          let success = res.data.success;
          let msg = res.data.message;
          const Swal = this.$swal.mixin({
            position: "center",
            showConfirmButton: false,
            timer: 800,
            timerProgressBar: true,
            customClass: {
              title: "font-semibold custom text-blueGray-600",
            },
          });

          if (success) {
            Swal.fire({
              icon: "success",
              title: msg,
            }).then(() => {
              localStorage.removeItem("user");
              localStorage.removeItem("permission");
              this.$router.push({ name: "Login" });
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getUser();

    document.addEventListener("click", this.close);
  },

  beforeDestroy() {
    document.removeEventListener("click", this.close);
  },
};
</script>
