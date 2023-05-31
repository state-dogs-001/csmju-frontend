<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="lg:px-10">
        <div class="mt-6 text-center">
          <h3
            class="mb-2 text-4xl font-semibold leading-normal text-blueGray-700"
          >
            หลักสูตรสาขาวิชาวิทยาการคอมพิวเตอร์
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Course Curriculum
          </p>
        </div>

        <div class="w-full mb-4">
          <div
            class="pt-6 mt-10 text-center border-t border-blueGray-200"
          ></div>
        </div>
        <h3
          class="text-center lg:text-left mb-2 text-2xl font-semibold leading-normal text-blueGray-700"
        >
          แผนการเรียนของหลักสูตรแต่ละชั้นปี
        </h3>
        <div class="flex flex-wrap">
          <div class="w-full p-2 lg:w-12/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-0 pt-0 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <h5
                class="px-4 bg-emerald-500 rounded-t py-6 text-xl text-center font-semibold leading-normal text-white text-shadow"
              >
                ปีที่ 1 / ภาคการศึกษาที่ 1
              </h5>
              <div class="block overflow-x-auto">
                <table class="items-center w-full bg-transparent">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="term in term_1" :key="term.id" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">
                            {{ term.subject_code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            {{ term.name_th }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            {{ term.credit }} ({{ term.theory_hour }}-{{
                              term.practical_hour
                            }}-{{ term.self_hour }})
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10100214</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            เกษตรเพื่อชีวิต
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (3-0-6)</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10700301</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            ภาษาไทยเพื่อการนำเสนอ
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (2-2-5)</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10700308</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            ภาษาอังกฤษในชีวิตประจำวัน
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (2-2-5)</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10305108</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            แคลคูลัสสำหรับวิทยาศาสตร์และเทคโนโลยี
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (2-3-5)</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full p-2 lg:w-12/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-0 pt-0 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <h5
                class="px-4 bg-emerald-500 rounded-t py-6 text-xl text-center font-semibold leading-normal text-white text-shadow"
              >
                ปีที่ 1 / ภาคการศึกษาที่ 2
              </h5>
              <div class="block overflow-x-auto">
                <table class="items-center w-full bg-transparent">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="term in term_2" :key="term.id" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">
                            {{ term.subject_code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            {{ term.name_th }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            {{ term.credit }} ({{ term.theory_hour }}-{{
                              term.practical_hour
                            }}-{{ term.self_hour }})
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10301113</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            คณิตศาสตร์ดีสครีต
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (3-0-6)</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10800113</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            พลเมืองดิจิทัล
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (3-0-6)</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10700309</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            สนทนาภาษาอังกฤษ
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (2-2-5)</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full p-2 lg:w-12/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-0 pt-0 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <h5
                class="px-4 bg-emerald-500 rounded-t py-6 text-xl text-center font-semibold leading-normal text-white text-shadow"
              >
                ปีที่ 2 / ภาคการศึกษาที่ 1
              </h5>
              <div class="block overflow-x-auto">
                <table class="items-center w-full bg-transparent">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="term in term_3" :key="term.id" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">
                            {{ term.subject_code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            {{ term.name_th }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            {{ term.credit }} ({{ term.theory_hour }}-{{
                              term.practical_hour
                            }}-{{ term.self_hour }})
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10700313</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            ภาษาอังกฤษเชิงวิทยาศาสตร์และนวัตกรรม
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (2-2-5)</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full p-2 lg:w-12/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-0 pt-0 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <h5
                class="px-4 bg-emerald-500 rounded-t py-6 text-xl text-center font-semibold leading-normal text-white text-shadow"
              >
                ปีที่ 2 / ภาคการศึกษาที่ 2
              </h5>
              <div class="block overflow-x-auto">
                <table class="items-center w-full bg-transparent">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="term in term_4" :key="term.id" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">
                            {{ term.subject_code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            {{ term.name_th }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            {{ term.credit }} ({{ term.theory_hour }}-{{
                              term.practical_hour
                            }}-{{ term.self_hour }})
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10304205</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            ความน่าจะเป็นและสถิติ
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (3-0-6)</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10700105</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            มนุษย์ สังคม เทคโนโลยีและสิ่งแวดล้อม
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (3-0-6)</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full p-2 lg:w-12/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-0 pt-0 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <h5
                class="px-4 bg-emerald-500 rounded-t py-6 text-xl text-center font-semibold leading-normal text-white text-shadow"
              >
                ปีที่ 3 / ภาคการศึกษาที่ 1
              </h5>
              <div class="block overflow-x-auto">
                <table class="items-center w-full bg-transparent">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="term in term_5" :key="term.id" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">
                            {{ term.subject_code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            {{ term.name_th }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            {{ term.credit }} ({{ term.theory_hour }}-{{
                              term.practical_hour
                            }}-{{ term.self_hour }})
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10700320</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            ภาษาอังกฤษเพื่อการศึกษาต่อและการประกอบอาชีพ
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (2-2-5)</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10300411</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            วิทยาศาสตร์เพื่อชีวิต
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (2-2-5)</p>
                        </div>
                      </td>
                    </tr>
                    <tr v-for="n in 4" :key="n" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">-</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            วิชาเอกเลือก วิชาที่ {{ n }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 ( - - )</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full p-2 lg:w-12/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-0 pt-0 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <h5
                class="px-4 bg-emerald-500 rounded-t py-6 text-xl text-center font-semibold leading-normal text-white text-shadow"
              >
                ปีที่ 3 / ภาคการศึกษาที่ 2
              </h5>
              <div class="block overflow-x-auto">
                <table class="items-center w-full bg-transparent">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="term in term_6" :key="term.id" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">
                            {{ term.subject_code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            {{ term.name_th }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            {{ term.credit }} ({{ term.theory_hour }}-{{
                              term.practical_hour
                            }}-{{ term.self_hour }})
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10300410</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            ความฉลาดรู้ด้านวิทยาศาสตร์สำหรับโลกสมัยใหม่
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (3-0-6)</p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10200504</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            การเป็นผู้ประกอบการ
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 (2-2-5)</p>
                        </div>
                      </td>
                    </tr>
                    <tr v-for="n in 3" :key="n" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">-</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            วิชาเอกเลือก วิชาที่ {{ n + 4 }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 ( - - )</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div class="w-full p-2 lg:w-12/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-0 pt-0 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <h5
                class="px-4 bg-emerald-500 rounded-t py-6 text-xl text-center font-semibold leading-normal text-white text-shadow"
              >
                ปีที่ 4 / ภาคการศึกษาที่ 1
              </h5>
              <div class="block overflow-x-auto">
                <table class="items-center w-full bg-transparent">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="term in term_7" :key="term.id" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">
                            {{ term.subject_code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            {{ term.name_th }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            {{ term.credit }} ({{ term.theory_hour }}-{{
                              term.practical_hour
                            }}-{{ term.self_hour }})
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10300497</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            สหกิจศึกษา
                            <i class="text-sm">(*เลือกอย่างใดอย่างหนึ่ง)</i>
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            6
                            <i class="text-sm"
                              >(ปฏิบัติไม่น้อยกว่า 16 สัปดาห์)</i
                            >
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10300498</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            การเรียนรู้อิสระ
                            <i class="text-sm">(*เลือกอย่างใดอย่างหนึ่ง)</i>
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            6
                            <i class="text-sm"
                              >(ปฏิบัติไม่น้อยกว่า 16 สัปดาห์)</i
                            >
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">10300499</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            การศึกษา / ฝึกงาน / ฝึกอบรมต่างประเทศ
                            <i class="text-sm">(*เลือกอย่างใดอย่างหนึ่ง)</i>
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            6
                            <i class="text-sm"
                              >(ปฏิบัติไม่น้อยกว่า 16 สัปดาห์)</i
                            >
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- 4th term 2 -->
        <div class="flex flex-wrap">
          <div class="w-full p-2 lg:w-12/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-0 pt-0 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <h5
                class="px-4 bg-emerald-500 rounded-t py-6 text-xl text-center font-semibold leading-normal text-white text-shadow"
              >
                ปีที่ 4 / ภาคการศึกษาที่ 2
              </h5>
              <div class="block overflow-x-auto">
                <table class="items-center w-full bg-transparent">
                  <thead>
                    <tr
                      class="text-blueGray-500 border-b-2 border-blueGray-500"
                    >
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        รหัสรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        ชื่อรายวิชา
                      </th>
                      <th
                        class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle whitespace-nowrap"
                      >
                        หน่วยกิต
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="term in term_8" :key="term.id" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-12 font-normal">
                            {{ term.subject_code }}
                          </p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            {{ term.name_th }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">
                            {{ term.credit }} ({{ term.theory_hour }}-{{
                              term.practical_hour
                            }}-{{ term.self_hour }})
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr v-for="n in 2" :key="n" class="border-b">
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div>
                          <p class="w-0 font-normal">-</p>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div
                          class="flex items-center text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                        >
                          <span class="font-normal">
                            วิชาเลือกเสรี วิชาที่ {{ n }}
                            <div class="text-sm font-normal"></div>
                          </span>
                        </div>
                      </td>
                      <td
                        class="p-4 px-6 text-md align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap"
                      >
                        <div class="w-48">
                          <p class="font-normal">3 ( - - )</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <p class="text-sm italic text-red-500 mt-6 px-4">
          หมายเหตุ : ชั้นปีที่ 4 ภาคการศึกษาที่ 1 และภาคการศึกษาที่ 2
          สามารถปรับเปลี่ยนสลับกันได้ ตามความเหมาะสม /
          ตามความเห็นชอบของอาจารย์ผู้รับผิดชอบหลักสูตร
        </p>

        <!-- Subject groups -->
        <h3
          class="text-center lg:text-left mb-2 mt-10 text-2xl font-semibold leading-normal text-blueGray-700"
        >
          กระบวนวิชาของหลักสูตรทั้งหมด
        </h3>
        <div class="flex flex-wrap">
          <!-- Group 1 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    1.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5
                    class="text-3xl font-semibold leading-normal whitespace-normal"
                  >
                    Fundamentals Computer Science
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาความรู้พื้นฐานทางวิทยาการคอมพิวเตอร์
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_1"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 color-code-1 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white">
                      <h5
                        class="top-auto bottom-auto text-shadow font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 2 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    2.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5 class="text-3xl font-semibold leading-normal">
                    System Analysis
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาแนวคิดการวิเคราะห์และออกแบบ
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_2"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 color-code-2 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white">
                      <h5
                        class="top-auto bottom-auto text-shadow font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 3 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 h-full bg-blueGray-100"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    3.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5 class="text-3xl font-semibold leading-normal">
                    Application Development
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาการพัฒนาระบบแอปพลิเคชัน
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_3"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 color-code-3 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white hover:text-blueGray-800">
                      <h5
                        class="top-auto bottom-auto font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 4 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    4.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5 class="text-3xl font-semibold leading-normal">
                    Network System
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาระบบเครือข่าย
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_4"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 color-code-4 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white hover:text-blueGray-800">
                      <h5
                        class="top-auto bottom-auto font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 5 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    5.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5 class="text-3xl font-semibold leading-normal">
                    Data Science
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาวิทยาการข้อมูล
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_5"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-shadow text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 color-code-5 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white hover:text-blueGray-800">
                      <h5
                        class="top-auto bottom-auto font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 6 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    6.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5 class="text-3xl font-semibold leading-normal">
                    Internet of Things
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาอินเตอร์เน็ตในทุกสิ่ง
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_6"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-shadow text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 color-code-6 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white hover:text-blueGray-800">
                      <h5
                        class="top-auto bottom-auto font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 7 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news h-full border-blueGray-300 bg-blueGray-100"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    7.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5 class="text-3xl font-semibold leading-normal">
                    Artificial Intelligence
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาปัญญาประดิษฐ์
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_7"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-shadow text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 color-code-7 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white hover:text-blueGray-800">
                      <h5
                        class="top-auto bottom-auto font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 8 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    8.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5 class="text-3xl font-semibold leading-normal">
                    Computer Science for Business
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาการประยุกต์งานด้านธุรกิจ
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_8"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-shadow text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 color-code-8 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white hover:text-blueGray-800">
                      <h5
                        class="top-auto bottom-auto font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Group 9 -->
          <div class="w-full p-2 lg:w-6/12">
            <div
              class="relative flex flex-col w-full min-w-0 px-4 pt-6 mb-6 break-words border rounded-lg shadow-lg max-h-news border-blueGray-300 bg-blueGray-100 h-full"
            >
              <div class="relative flex mb-4 w-full overflow-x-auto">
                <div class="relative w-auto">
                  <h5
                    class="-mt-5 font-bold text-55 text-blueGray-700 text-shadow"
                  >
                    9.
                  </h5>
                </div>
                <div class="relative w-auto ml-3 text-blueGray-700 text-shadow">
                  <h5 class="text-3xl font-semibold leading-normal">
                    Special Topics
                  </h5>

                  <p class="text-xl font-semibold leading-normal">
                    กลุ่มวิชาหัวข้อพิเศษ
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div
                  v-for="subject in group_9"
                  :key="subject.id"
                  class="w-full px-2 lg:w-4/12 text-shadow text-center"
                >
                  <div
                    class="flex min-h-120-px flex-col w-full min-w-0 mb-6 break-words duration-150 ease-linear border-2 rounded-lg shadow-lg border-blueGray-300 bg-emerald-500 showdisplay hover:zoom-xs"
                  >
                    <div class="px-2 py-4 text-white hover:text-blueGray-800">
                      <h5
                        class="top-auto bottom-auto font-semibold leading-normal text-md"
                      >
                        {{ subject.name_th }}
                      </h5>
                    </div>
                  </div>
                  <div
                    class="z-2 absolute px-4 -ml-20 duration-150 ease-linear rounded-lg shadow-lg -mt-72 w-96 bg-blueGray-700 contentshow"
                  >
                    <div class="relative py-4 text-blueGray-800">
                      <div
                        class="py-2 rounded-lg bg-blueGray-100 text-blueGray-700"
                      >
                        <p class="mb-1 text-xl font-bold text-center">
                          {{ subject.name_th }}
                        </p>
                        <p class="text-lg font-semibold text-center">
                          {{ subject.name_en }}
                        </p>
                      </div>
                      <div class="my-2 border-b border-blueGray-100"></div>

                      <h4 class="font-bold text-left text-md text-white">
                        รหัสวิชา : {{ subject.subject_code }}
                      </h4>
                      <h4 class="font-bold text-left text-md text-white">
                        หน่วยกิต : {{ subject.credit }} ({{
                          subject.theory_hour
                        }}-{{ subject.practical_hour }}-{{ subject.self_hour }})
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//? Service
import http from "@/services/WebpageService";
//? Static data
import subjects from "@/json/subjects";
export default {
  data() {
    return {
      //? Filter by detail
      group_1: [],
      group_2: [],
      group_3: [],
      group_4: [],
      group_5: [],
      group_6: [],
      group_7: [],
      group_8: [],
      group_9: [],

      //? Filter by term
      term_1: [],
      term_2: [],
      term_3: [],
      term_4: [],
      term_5: [],
      term_6: [],
      term_7: [],
      term_8: [],

      //? Static data
      statisData: subjects,
    };
  },

  async mounted() {
    await this.getSubjectGruop();
  },

  methods: {
    staticDataFilterByDetail(detail) {
      //? Filter Subject By detail
      let res = this.statisData.filter((subject) => {
        return subject.detail.match(detail);
      });

      return res;
    },

    staticDataFilterByTerm(term) {
      //? Filter Subject By term
      let res = this.statisData.filter((subject) => {
        return subject.term.match(term);
      });

      return res;
    },

    async getSubjectGruop() {
      const groups = [
        "Fundamental",
        "Analysis",
        "Application",
        "Network",
        "Data",
        "internet",
        "Artificial",
        "Computer",
        "Special",
      ];
      const terms = ["1", "2", "3", "4", "5", "6", "7", "8"];

      try {
        const groupRequests = groups.map((group) =>
          http.get(`subject/filter/detail/${group}`)
        );
        const termRequests = terms.map((term) =>
          http.get(`subject/filter/term/${term}`)
        );

        const groupResponses = await Promise.all(groupRequests);
        const termResponses = await Promise.all(termRequests);

        groupResponses.forEach((response, index) => {
          if (response.data.success) {
            this[`group_${index + 1}`] = response.data.data;
          }
        });

        termResponses.forEach((response, index) => {
          if (response.data.success) {
            this[`term_${index + 1}`] = response.data.data;
          }
        });
      } catch (err) {
        this.group_1 = await this.staticDataFilterByDetail("Fundamental");
        this.group_2 = await this.staticDataFilterByDetail("Analysis");
        this.group_3 = await this.staticDataFilterByDetail("Application");
        this.group_4 = await this.staticDataFilterByDetail("Network");
        this.group_5 = await this.staticDataFilterByDetail("Data");
        this.group_6 = await this.staticDataFilterByDetail("Internet");
        this.group_7 = await this.staticDataFilterByDetail("Artificial");
        this.group_8 = await this.staticDataFilterByDetail("Computer");
        this.group_9 = await this.staticDataFilterByDetail("Special Topics");
        this.term_1 = await this.staticDataFilterByTerm("1");
        this.term_2 = await this.staticDataFilterByTerm("2");
        this.term_3 = await this.staticDataFilterByTerm("3");
        this.term_4 = await this.staticDataFilterByTerm("4");
        this.term_5 = await this.staticDataFilterByTerm("5");
        this.term_6 = await this.staticDataFilterByTerm("6");
        this.term_7 = await this.staticDataFilterByTerm("7");
        this.term_8 = await this.staticDataFilterByTerm("8");
      }
    },
  },
};
</script>
