<template>
  <div
    class="countdown-col relative flex items-center justify-center h-screen w-screen"
  >
    <!-- flex direction column -->
    <div class="px-6 absolute flex flex-col items-center w-full">
      <!-- Image Transition -->
      <div class="cssanimation sequence fadeInBottom scroll-hide">
        <img
          :src="logo"
          alt="CSMJU Logo"
          class="h-24 center-img shadow-lg bg-no-repeat bg-cover bg-full scroll-hide"
        />
      </div>

      <!-- Typing Effect -->
      <div class="pt-24 w-full block overflow-x-auto scroll-hide">
        <h1
          class="line anim-typewriter text-white font-bold text-shadow h-70-px text-6xl leading-none"
        >
          ยินดีต้อนรับสู่สาขาวิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้
        </h1>
      </div>

      <!-- Button go to home page -->
      <button
        @click="homePage"
        class="mt-48 bg-white py-4 nextpage-button text-2xl shadow-lg rounded-full"
      >
        <span class="text-white font-bold">เข้าสู่เว็บไซต์</span>
        <p class="text-lg font-semibold text-blueGray-700">Enter Website</p>
      </button>
    </div>
  </div>
</template>

<script>
//? Import image
import CSMJULogo from "@/assets/images/logo.png";

export default {
  data() {
    return {
      logo: CSMJULogo,
    };
  },
  methods: {
    homePage() {
      let localData = { state: 1 };
      localStorage.setItem("into", JSON.stringify(localData));
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
.countdown-col {
  background: url("@/assets/images/Bg-welcome.svg") no-repeat center fixed;
  background-size: cover;
}

.line {
  position: relative;
  top: 50%;
  width: 24em;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

.anim-typewriter {
  animation: typewriter 4s steps(44) 1s 1 normal both,
    blinkTextCursor 500ms steps(44) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 25em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}

.nextpage-button {
  background: linear-gradient(100deg, #10b981, #0891b2);
  color: #fff;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  border: 2px solid #ddd;
  outline: none;
  transition: 0.4s;
}

.nextpage-button:hover {
  opacity: 0.7;
}
</style>
