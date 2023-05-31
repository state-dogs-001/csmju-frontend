<template>
  <main class="profile-page custom">
    <section class="relative pb-16 bg-blueGray-200">
      <div class="container mx-auto">
        <div class="flex flex-wrap">
          <div
            class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded-lg shadow-xl lg:w-12/12"
          >
            <div class="px-6 mt-6">
              <div class="flex flex-wrap rounded-lg bg-blueGray-100">
                <div class="w-full lg:w-3/12">
                  <div class="mr-4 text-center rounded-lg bg-emerald-500">
                    <h3
                      class="text-6xl font-semibold leading-normal text-white"
                    >
                      Library
                    </h3>
                  </div>
                </div>

                <div class="w-full lg:w-6/12">
                  <h3 class="mt-1 text-2xl font-semibold">
                    ระบบห้องสมุดค้นคว้าโครงงาน
                  </h3>

                  <h3 class="text-xl font-normal">| Project Library System</h3>
                </div>

                <!-- Back to main service -->
                <div class="w-full lg:w-3/12">
                  <div class="mt-4 text-right">
                    <router-link
                      to="/student/service/project-library"
                      class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    >
                      ย้อนกลับ
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                <div class="flex flex-wrap">
                  <!-- Image cover -->
                  <div
                    class="w-full hidden lg:flex justify-center items-center lg:w-6/12 lg:order-2"
                  >
                    <div class="w-full p-4 lg:w-8/12">
                      <img :src="library" class="shadow-none" alt="Image" />
                    </div>
                  </div>

                  <!-- Data -->
                  <div class="w-full lg:w-6/12 lg:order-1">
                    <!-- Year -->
                    <div class="flex flex-wrap mb-4">
                      <div class="w-full px-4 md:w-12/12">
                        <div
                          class="block my-3 text-gray-700 text-2xl font-bold"
                        >
                          <i class="fa-solid fa-calendar-week"></i> ปีการศึกษา
                        </div>
                        <div
                          class="w-full p-4 tracking-wide text-lg bg-blueGray-200 rounded-lg"
                        >
                          {{ project?.years }}
                        </div>
                      </div>
                    </div>

                    <!-- Project code -->
                    <div class="flex flex-wrap mb-4">
                      <div class="w-full px-4 md:w-12/12">
                        <div
                          class="block my-3 text-gray-700 text-2xl font-bold"
                        >
                          <i class="fa-solid fa-magnifying-glass"></i>
                          รหัสโครงงาน
                        </div>
                        <div
                          class="p-4 tracking-wide text-lg bg-blueGray-200 rounded-lg"
                        >
                          {{ project?.project_code }}
                        </div>
                      </div>
                    </div>

                    <!-- Name -->
                    <div class="flex flex-wrap mb-4">
                      <div class="w-full px-4 md:w-12/12">
                        <div
                          class="block my-3 text-gray-700 text-2xl font-bold"
                        >
                          <i class="fa-solid fa-book"></i> ชื่อโครงงาน
                        </div>
                        <div
                          class="p-4 tracking-wide text-lg bg-blueGray-200 rounded-lg"
                        >
                          {{ project?.name }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="w-full">
                  <!-- Chairman and directors -->
                  <div class="flex flex-wrap mb-4">
                    <div class="w-full px-4 lg:w-12/12">
                      <div class="block my-3 text-gray-700 text-2xl font-bold">
                        <i class="fa-solid fa-user-group"></i>
                        ชื่อผู้จัดทำและอาจารย์ผู้รับผิดชอบ
                      </div>
                      <div
                        class="w-full lg:w-6/12 flex flex-col lg:flex-row p-4 bg-blueGray-200 rounded-lg"
                      >
                        <div class="w-full md:6/12 flex flex-col">
                          <span class="tracking-wide text-lg font-bold"
                            >ชื่อผู้จัดทำ</span
                          >
                          <span class="tracking-wide text-lg"
                            >• {{ project?.editor_1 }}
                          </span>
                          <span
                            class="tracking-wide text-lg"
                            v-show="project?.editor_2"
                            >• {{ project?.editor_2 }}
                          </span>
                          <span
                            class="tracking-wide text-lg"
                            v-show="project?.editor_3"
                            >• {{ project?.editor_3 }}
                          </span>
                        </div>

                        <div class="w-full md:6/12 flex flex-col">
                          <span class="tracking-wide text-lg font-bold"
                            >ชื่อประธานและกรรมการโครงงาน</span
                          >
                          <span class="tracking-wide text-lg"
                            >• {{ project?.chairman_name_title
                            }}{{ project?.chairman_name }}
                          </span>
                          <span
                            class="tracking-wide text-lg"
                            v-show="project?.director_1_name"
                            >• {{ project?.director_1_name_title
                            }}{{ project?.director_1_name }}
                          </span>
                          <span
                            class="tracking-wide text-lg"
                            v-show="project?.director_2_name"
                            >• {{ project?.director_2_name_title
                            }}{{ project?.director_2_name }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Detail -->
                  <div class="flex flex-wrap mb-4">
                    <div class="w-full px-4 md:w-12/12">
                      <div class="block my-3 text-gray-700 text-2xl font-bold">
                        <i class="fa-solid fa-book-open"></i> รายละเอียด
                      </div>
                      <div
                        class="p-4 tracking-wide text-lg bg-blueGray-200 rounded-lg"
                      >
                        {{ project?.detail }}
                      </div>
                    </div>
                  </div>

                  <!-- Buttons -->
                  <div class="py-6 text-center">
                    <a
                      :href="project?.file"
                      target="_blank"
                      class="px-6 py-3 mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    >
                      ดูเอกสาร
                      <i class="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
//? Service
import http from "@/services/WebpageService";
//? Image
import library from "@/assets/images/library.png";
export default {
  data() {
    return {
      id: this.$route.params.id,
      project: [],
      library,
    };
  },

  async mounted() {
    await this.getProject(this.id);
  },

  methods: {
    async getProject(id) {
      try {
        const res = await http.get(`project/show/read/${id}`);
        let data = res?.data?.sucsess ?? res?.data?.data;
        this.project = data;
      } catch (e) {}
    },
  },
};
</script>
