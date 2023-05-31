<template>
  <div class="container px-4 mx-auto custom">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-10 mb-6 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            คณาจารย์สาขาวิชาวิทยาการคอมพิวเตอร์
          </h3>
          <h3
            class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
          >
            คณะวิทยาศาสตร์ มหาวิทยาลัยแม่โจ้
          </h3>
        </div>
        <hr />
        <div class="flex flex-wrap py-6">
          <div
            v-for="personnel in teachers"
            :key="personnel.id"
            class="w-full px-4 text-center lg:w-3/12 bg-blueGray-100 border rounded-md shadow-sm"
          >
            <div class="relative px-12 py-12">
              <img
                :src="personnel.image_profile"
                class="h-auto center-img max-w-full align-middle bg-teal-500 border-none rounded-full shadow-xl"
              />
            </div>

            <h3
              class="mb-0 text-lg font-semibold leading-normal text-blueGray-700"
            >
              {{ personnel.name_title }} {{ personnel.name_th.split(" ")[0] }}
              <br />
              {{ personnel.name_th.split(" ")[1] }}
            </h3>
            <div class="mb-4 text-sm font-semibold text-blueGray-500">
              {{ personnel.name_en }}
            </div>

            <div class="mt-3 mb-0 text-blueGray-400">
              <div class="w-full min-h-50-px mb-2">
                <i class="mr-2 text-lg fas fa-briefcase"></i>
                ตำแหน่ง
                <p class="text-blueGray-700">
                  {{ personnel.position_academic }}
                </p>
              </div>

              <div class="w-full min-h-120-px mb-2">
                <i class="mr-2 text-lg fas fa-university"></i>
                การศึกษา
                <p class="text-blueGray-700">
                  {{ personnel.education }}
                </p>
              </div>

              <div class="w-full min-h-50-px mb-4">
                <i class="mr-2 text-lg fas fa-phone-alt"></i>
                การติดต่อ
                <p class="text-blueGray-700">
                  {{ personnel.tel_number }}
                </p>
                <p class="text-blueGray-700">{{ personnel.email }}</p>
              </div>

              <div class="mb-2">
                <button
                  type="button"
                  @click="readCV(personnel.cv?.id)"
                  class="px-4 py-2 text-white shadow rounded-lg focus:outline-none"
                  :class="
                    !personnel.cv
                      ? 'bg-blueGray-500 cursor-not-allowed'
                      : 'bg-emerald-500 active:bg-emerald-600 cursor-pointer'
                  "
                  :disabled="!personnel.cv"
                >
                  ดูข้อมูล CV
                </button>
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
export default {
  computed: {
    ...mapGetters("personnel", ["teachers"]),
  },

  async mounted() {
    await this.getTeachers();
  },

  methods: {
    ...mapActions("personnel", ["getTeachers"]),

    readCV(id) {
      this.$router.push({ name: "ReadCV", params: { id: id } });
    },
  },
};
</script>
