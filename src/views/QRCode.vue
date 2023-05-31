<template>
  <div class="flex items-center min-h-screen p-6 bg-white dark:bg-gray-900">
    <div
      class="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg dark:bg-gray-800"
    >
      <div class="flex flex-auto border-b-2 pb-4 border-blueGray-500">
        <img class="h-70-px" src="@/assets/images/logo.png" />
      </div>
      <div
        class="cssanimation sequence fadeInBottom flex flex-col items-center py-10 overflow-y-auto custom md:flex-col"
      >
        <div class="border-2 p-4">
          <img class="h-200-px" src="@/assets/images/qrcode.png" />
        </div>
        <div
          class="px-6 py-2 text-2xl mt-10 text-blueGray-700 dark:text-gray-300"
        >
          ดาวน์โหลดแอปพลิเคชัน CSMJU
          <a
            :href="mobileDownloadLink"
            target="_blank"
            class="text-center text-emerald-600 font-semibold text-3xl"
          >
            คลิกที่นี่
          </a>
        </div>

        <div class="text-sm mt-6">
          <p class="pb-2 text-blueGray-400 dark:text-gray-300">
            หากคุณยังไม่มีแอปพลิเคชันสาขาวิชาวิทยาการคอมพิวเตอร์ ม.แม่โจ้
            กรุณาดาวน์โหลดที่ลิงค์ หรือแสกน QR Code ที่อยู่ทางด้านบน

            <router-link class="text-emerald-600 text-md" to="/home"
              >กลับหน้าหลัก</router-link
            >
          </p>
          <div class="text-center">
            <i class="text-red-500"
              >(หมายเหตุ : รองรับเฉพาะระบบปฏิบัติการ Android เท่านั้น)</i
            >
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
      mobileDownloadLink:
        "https://mega.nz/file/2kMSTCAR#z7AtiMz7KwK0OXx6l0Kyo9C1zGb9sVJ-19mRFVL8n4Y",
    };
  },
};
</script>
