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
                      Profile
                    </h3>
                  </div>
                </div>
                <div class="w-full lg:w-6/12">
                  <h3 class="mt-1 text-2xl font-semibold">
                    แก้ไขข้อมูลส่วนตัวผู้ใช้งาน
                  </h3>

                  <h3 class="text-xl font-normal">| Edit your profile</h3>
                </div>
                <div class="w-full lg:w-3/12">
                  <div class="mt-4 text-right">
                    <router-link
                      to="/student/service"
                      class="px-6 py-3 mb-1 mr-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blueGray-600 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                    >
                      ย้อนกลับ
                    </router-link>
                  </div>
                </div>
              </div>

              <div class="py-6 mt-2 text-left border-t border-blueGray-200">
                <!-- Profile form -->
                <form
                  @submit.stop.prevent="handleSubmit"
                  enctype="multipart/form-data"
                >
                  <div class="flex flex-wrap">
                    <!-- Right -->
                    <div class="w-full lg:w-6/12 pr-4">
                      <!-- Image  -->
                      <div class="px-2">
                        <div class="relative text-center">
                          <img
                            v-if="image"
                            :src="image"
                            class="mt-0 rounded-full shadow-lg h-200-px center-img max-w-200-px cropped bg-emerald-500"
                          />
                          <div class="text-left">
                            <label
                              class="block mt-4 my-3 text-gray-700 text-md"
                              for="image"
                              >อัปโหลดรูปโปรไฟล์
                              <span class="text-red-500 text-xs"
                                >(ไฟล์ที่อัปโหลดขนาดต้องไม่เกิน 8MB)</span
                              ></label
                            >

                            <input
                              ref="fileupload"
                              type="file"
                              @change="onFileSelected"
                              accept="image/*"
                              class="px-3 py-2 leading-tight text-gray-700 border-b w-full"
                            />
                          </div>
                          <div
                            v-if="v$.file.$error"
                            class="mt-2 text-left text-sm text-red-500"
                          >
                            {{ v$.file.$errors[0].$message }}
                          </div>
                        </div>
                      </div>

                      <!-- Citizen id -->
                      <div class="mt-8 flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >รหัสประจำตัวประชาชน</label
                          >
                          <input
                            v-model="citizenId"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border bg-blueGray-100"
                            type="text"
                            placeholder="Citizen ID"
                            readonly
                          />
                        </div>
                      </div>

                      <!-- Student code -->
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <label class="block my-3 text-gray-700 text-md"
                            >รหัสนักศึกษา</label
                          >
                          <input
                            v-model="studentCode"
                            class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border bg-blueGray-100"
                            type="text"
                            placeholder="Student ID"
                            readonly
                          />
                        </div>
                      </div>
                      <div class="flex flex-wrap mb-4">
                        <div class="w-full px-2 md:w-12/12">
                          <label class="block my-3 text-red-500 text-sm"
                            >**หมายเหตุ :
                            กรณีที่ต้องการแก้ไขข้อมูลส่วนตัวในส่วนที่จำกัดไว้
                            กรุณาแจ้งบุคลากรสาขาวิชา**</label
                          >
                        </div>
                      </div>
                    </div>

                    <!-- Left  -->
                    <div class="w-full mt-2 lg:w-6/12">
                      <div class="border-l pr-2 pl-4">
                        <!-- Name and last name thai -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อ (ภาษาไทย)</label
                            >
                            <input
                              v-model="firstName"
                              class="w-full px-3 placeholder-blueGray-300 bg-blueGray-100 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Firstname"
                              readonly
                            />
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >นามสกุล (ภาษาไทย)</label
                            >
                            <input
                              v-model="lastName"
                              class="w-full px-3 py-2 placeholder-blueGray-300 bg-blueGray-100 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Lastname"
                              readonly
                            />
                          </div>
                        </div>

                        <!-- Name and last name english -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ชื่อ (ภาษาอังกฤษ)</label
                            >
                            <input
                              v-model="firstNameEn"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Firstname (English)"
                            />
                            <div
                              v-if="v$.firstNameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.firstNameEn.$errors[0].$message }}
                            </div>
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >นามสกุล (ภาษาอังกฤษ)</label
                            >
                            <input
                              v-model="lastNameEn"
                              class="w-full px-3 py-2 placeholder-blueGray-300 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Lastname (English)"
                            />
                            <div
                              v-if="v$.lastNameEn.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.lastNameEn.$errors[0].$message }}
                            </div>
                          </div>
                        </div>

                        <!-- Email -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อีเมล</label
                            >
                            <input
                              v-model="email"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Email"
                            />
                            <div
                              v-if="v$.email.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.email.$errors[0].$message }}
                            </div>
                          </div>
                        </div>

                        <!-- Phone Number -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >เบอร์ติดต่อ
                              <span class="text-sm text-red-500 italic"
                                >**ไม่ต้องใส่ขีด (-)**</span
                              ></label
                            >
                            <input
                              v-model="tel"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700"
                              type="text"
                              placeholder="Phone Number"
                              maxlength="10"
                            />
                            <div
                              v-if="v$.tel.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.tel.$errors[0].$message }}
                            </div>
                          </div>
                        </div>

                        <!-- Postcode and sub district -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >รหัสไปรษณีย์</label
                            >
                            <input
                              v-model="postcode"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Postcode"
                              maxlength="5"
                            />
                            <div
                              v-if="v$.postcode.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.postcode.$errors[0].$message }}
                            </div>
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ตำบล</label
                            >
                            <select
                              v-model="subDistrict"
                              class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight border"
                              :class="
                                subDistrict == ''
                                  ? 'text-gray-500'
                                  : 'text-gray-700'
                              "
                              :disabled="subDistricts == null"
                            >
                              <option value="" disabled selected>
                                Sub District
                              </option>
                              <option
                                v-for="item in subDistricts"
                                :key="item.subDistrictId"
                                :value="item.subDistrictName"
                              >
                                {{ item.subDistrictName }}
                              </option>
                            </select>
                            <div
                              v-if="v$.subDistrict.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.subDistrict.$errors[0].$message }}
                            </div>
                          </div>
                        </div>

                        <!-- District and Province -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >อำเภอ</label
                            >
                            <input
                              v-model="district"
                              class="w-full px-3 placeholder-blueGray-300 bg-blueGray-100 py-2 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="District"
                              readonly
                            />
                          </div>
                          <div class="w-full px-2 md:w-6/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >จังหวัด</label
                            >
                            <input
                              v-model="province"
                              class="w-full px-3 py-2 placeholder-blueGray-300 bg-blueGray-100 leading-tight text-gray-700 border"
                              type="text"
                              placeholder="Province"
                              readonly
                            />
                          </div>
                        </div>

                        <!-- Address -->
                        <div class="flex flex-wrap mb-4">
                          <div class="w-full px-2 md:w-12/12">
                            <label
                              class="block my-3 text-gray-700 text-md"
                              for="Title"
                              >ที่อยู่ (สามารถติดต่อได้)</label
                            >
                            <textarea
                              v-model="address"
                              cols="30"
                              placeholder="Address"
                              rows="5"
                              class="relative w-full px-3 py-1 border-b text-base bg-white outline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                            ></textarea>
                            <div
                              v-if="v$.address.$error"
                              class="mt-0 text-sm text-red-500"
                            >
                              {{ v$.address.$errors[0].$message }}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Button -->
                  <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 pr-4">
                      <div class="mt-4 p-4 text-center">
                        <button
                          class="px-6 py-3 mb-1 mx-4 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
                          type="submit"
                        >
                          บันทึก
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
//? API
import http from "@/services/WebpageService";
//? Packages
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import thai from "thai-data";
export default {
  data() {
    return {
      v$: useValidate(),
      citizenId: "",
      studentCode: "",
      firstName: "",
      lastName: "",
      firstNameEn: "",
      lastNameEn: "",
      file: null,
      image: "",
      email: "",
      tel: "",

      province: "",
      district: "",
      subDistrict: "",
      subDistricts: null,
      postcode: "",
      address: "",

      profile: null,
    };
  },

  watch: {
    postcode(val) {
      if (val) {
        let lenStr = val.toString().length;
        lenStr == 5 ? this.getSubDistrict() : null;
      }
    },
  },

  mounted() {
    this.checkStudent();
  },

  methods: {
    onFileSelected(event) {
      //? Set default SweetAlert2
      const Swal = this.$swal.mixin({
        position: "center",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        customClass: {
          title: "font-semibold custom text-blueGray-600",
        },
      });

      this.file = event.target.files[0];

      let size = this.file?.size / 10 ** 6;
      if (size > 8) {
        Swal.fire({
          icon: "error",
          title: "ไฟล์ที่อัปโหลดต้องมีขนาดไม่เกิน 8MB",
        }).then(() => {
          //? Reset
          this.file = null;
          this.image = "";
          this.$refs.fileupload.value = "";
        });
        return;
      }

      this.image = URL.createObjectURL(this.file);
    },

    getSubDistrict() {
      const data = thai.allField(this.postcode);
      this.subDistricts = data.subDistrictList;
      this.district = data.districtList[0].districtName;
      this.province = data.provinceList[0].provinceName;
    },

    checkStudent() {
      let user = JSON.parse(localStorage.getItem("user"));

      if (user) {
        //? Setting default data
        let citizenId = user.card_id;

        //? Call API
        http
          .get(`student/search/citizen-id/${citizenId}`)
          .then((res) => {
            if (res.data.success) {
              this.profile = res.data.data;
              this.showProfile();
            } else {
              this.citizenId = citizenId;
              this.studentCode = user.email.slice(3, 13);
              this.firstName = user.name;
              this.lastName = user.surname;
              this.email = user.email;
              this.tel = user.mobile;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    showProfile() {
      this.citizenId = this.profile.citizen_id;
      this.studentCode = this.profile.student_code;

      let nameTh = this.profile.name_th.split(" ");
      let nameEn = this.profile.name_en.split(" ");
      this.firstName = nameTh[0];
      this.lastName = nameTh[1];
      this.firstNameEn = nameEn[0];
      this.lastNameEn = nameEn[1];

      this.email = this.profile.email;
      this.tel = this.profile.tel_number;

      this.province = this.profile.province;
      this.district = this.profile.district;
      this.subDistrict = this.profile.sub_district;
      this.postcode = this.profile.postcode;
      this.address = this.profile.address;
    },

    handleSubmit() {
      this.v$.$validate();
      //? Validate not error
      if (!this.v$.$error) {
        //? Setting data to FormData
        let data = new FormData();
        data.append("citizen_id", this.citizenId);
        data.append("student_code", this.studentCode);
        data.append("name_th", this.firstName + " " + this.lastName);
        data.append(
          "name_en",
          this.firstNameEn.toLowerCase() + " " + this.lastNameEn.toLowerCase()
        );
        data.append("email", this.email.toLowerCase());
        data.append("tel_number", this.tel);
        data.append("province", this.province);
        data.append("district", this.district);
        data.append("sub_district", this.subDistrict);
        data.append("postcode", this.postcode);
        data.append("address", this.address);

        //? Check file
        if (this.file != null) {
          data.append("image_profile", this.file);
        }

        if (this.profile != null) {
          //? has data on database call update function
          this.updateProfile(data);
        } else {
          //? call create function
          this.createProfile(data);
        }
      }
    },

    updateProfile(data) {
      //? Set sweet alert default settings
      const Swal = this.$swal.mixin({
        position: "center",
        showConfirmButton: true,
        customClass: {
          title: "font-weight-bold custom",
          confirmButton:
            "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          cancelButton:
            "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
        },
        buttonsStyling: false,
      });

      //? Call API
      let id = this.profile.id;

      http
        .post(`student/update/${id}`, data)
        .then((res) => {
          if (res.data.success) {
            let msg = res.data.message;
            Swal.fire({
              icon: "success",
              title: msg,
            }).then(() => {
              this.$router.push({ name: "StudentService" });
            });
          }
        })
        .catch((err) => {
          if (err) {
            Swal.fire({
              icon: "error",
              title: "ขออภัย ทำรายการไม่สำเร็จ",
            });
          }
        });
    },

    createProfile(data) {
      //? Set sweet alert default settings
      const Swal = this.$swal.mixin({
        position: "center",
        showConfirmButton: true,
        customClass: {
          title: "font-weight-bold custom",
          confirmButton:
            "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          cancelButton:
            "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
        },
        buttonsStyling: false,
      });

      //? Call API
      http
        .post("student/new", data)
        .then((res) => {
          if (res.data.success) {
            let msg = res.data.message;
            Swal.fire({
              icon: "success",
              title: msg,
            }).then(() => {
              this.$router.push({ name: "StudentService" });
            });
          }
        })
        .catch((err) => {
          if (err) {
            Swal.fire({
              icon: "error",
              title: "ขออภัย ทำรายการไม่สำเร็จ",
            });
          }
        });
    },
  },

  validations() {
    return {
      firstNameEn: {
        required: helpers.withMessage(
          "ป้อนชื่อจริง (ภาษาอังกฤษ) ก่อน",
          required
        ),
      },
      lastNameEn: {
        required: helpers.withMessage(
          "ป้อนนามสกุล (ภาษาอังกฤษ) ก่อน",
          required
        ),
      },
      email: {
        required: helpers.withMessage("ป้อนอีเมลก่อน", required),
        email: helpers.withMessage("รูปแบบอีเมลที่ป้อนไม่ถูกต้อง", email),
      },
      tel: {
        required: helpers.withMessage("ป้อนเบอร์ติดต่อก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) =>
            `เบอร์ติดต่อตัวเลขต้องไม่น้อยกว่า ${$params.min} ตัว`,
          minLength(10)
        ),
      },
      postcode: {
        required: helpers.withMessage("ป้อนรหัสไปรษณีย์ก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) => `รหัสไปรษณีย์ต้องไม่น้อยกว่า ${$params.min} ตัว`,
          minLength(5)
        ),
      },
      subDistrict: {
        required: helpers.withMessage("ป้อนตำบลก่อน", required),
      },
      address: {
        required: helpers.withMessage(
          "ป้อนที่อยู่ที่สามารถติดต่อได้ก่อน",
          required
        ),
      },
      file: {
        required: helpers.withMessage(
          "ไฟล์ที่อัปโหลดต้องเป็นไฟล์ .jpeg .jpg หรือ .png เท่านั้น",
          () => {
            if (this.file != null) {
              //? Check file type
              if (
                this.file.type == "image/jpeg" ||
                this.file.type == "image/jpg" ||
                this.file.type == "image/png"
              ) {
                return true;
              } else {
                return false;
              }
            } else {
              return true;
            }
          }
        ),
      },
    };
  },
};
</script>
