<template>
  <div>
    <auth-navbar />
    <main>
      <section class="relative w-full min-h-screen py-20">
        <div
          class="absolute top-0 w-full h-full bg-blueGray-800 bg-full"
          :style="`background-image: url('${backgroundLogin}');`"
        ></div>
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
        <auth-footer absolute />
      </section>
    </main>
  </div>
</template>

<script>
//? Components
import AuthNavbar from "@/components/navbars/AuthNavbar.vue";
import AuthFooter from "@/components/footers/AuthFooter.vue";
//? Image
import backgroundLogin from "@/assets/images/bg-login.png";
export default {
  components: {
    AuthNavbar,
    AuthFooter,
  },
  data() {
    return {
      backgroundLogin,
    };
  },
};
</script>
