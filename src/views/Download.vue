<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-h-screen-50 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3 class="text-4xl font-semibold leading-normal text-blueGray-700">
            ดาวน์โหลดแบบฟอร์มเอกสาร
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Download form
          </p>
        </div>

        <div class="pt-6 mt-10 border-t border-blueGray-200"></div>

        <template v-if="documentsData">
          <div class="flex flex-wrap">
            <div class="flex flex-auto mt-4 w-full overflow-x-auto">
              <div class="block w-full overflow-x-auto lg:w-12/12">
                <!-- Projects table -->
                <table
                  class="items-center w-full bg-transparent border-collapse"
                >
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ลำดับ
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        แบบฟอร์มเอกสาร
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ดาวน์โหลด
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-left w-full">
                    <tr
                      class="border-b"
                      v-for="(doc, index) in documentsData"
                      :key="index"
                    >
                      <td
                        class="p-4 px-6 text-sm align-middle whitespace-nowrap"
                      >
                        {{ (currentPage - 1) * perPage + index + 1 }}
                      </td>

                      <td class="p-4 px-6 text-sm align-middle">
                        <div>
                          <p class="w-full font-normal truncate-3">
                            {{ doc.name }}
                          </p>
                        </div>
                      </td>

                      <td
                        class="p-4 px-6 text-xs align-middle whitespace-nowrap"
                      >
                        <button
                          class="px-4 py-2 mb-1 mr-1 text-xs font-normal text-white uppercase transition-all duration-150 ease-linear bg-emerald-500 rounded-lg shadow-md outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none"
                          type="button"
                        >
                          <i class="fas fa-arrow-down"></i>
                          <a
                            :href="doc.file"
                            class="ml-1 text-md font-bold"
                            target="_blank"
                            >Download</a
                          >
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <VueTailwindPagination
                  :current="currentPage"
                  :total="total"
                  :per-page="perPage"
                  @page-changed="onPageChanged($event)"
                  class="my-6"
                />
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="flex flex-col items-center w-full py-4">
            <div class="w-full md:w-3/12 mb-4">
              <img :src="noContent" alt="no content" />
            </div>
            <div class="w-full">
              <h3 class="text-blueGray-500 text-xl md:text-2xl text-center">
                ขออภัย ไม่พบข้อมูลของแบบฟอร์มเอกสาร
              </h3>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
//? Packages
import VueTailwindPagination from "@ocrv/vue-tailwind-pagination";
import { mapActions, mapGetters } from "vuex";
//? Image
import noContent from "@/assets/images/page-not-found.png";
export default {
  components: {
    VueTailwindPagination,
  },

  computed: {
    ...mapGetters("document", ["documentsArray"]),
    documentsData() {
      return this.documentsArray.data;
    },
  },

  data() {
    return {
      //? Image
      noContent,

      //? Pagination
      currentPage: 0,
      perPage: 0,
      total: 0,
    };
  },

  mounted() {
    let page = 1;
    this.getDocumentStore(page);
  },

  updated() {
    this.currentPage = this.documentsArray.current_page;
    this.perPage = this.documentsArray.per_page;
    this.total = this.documentsArray.total;
  },

  methods: {
    ...mapActions("document", ["getDocuments"]),
    async getDocumentStore(page) {
      await this.getDocuments(page);
    },

    //? Pagination
    onPageChanged(page) {
      this.currentPage = page;
      this.getDocumentStore(this.currentPage);
    },
  },
};
</script>
