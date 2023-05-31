<template>
  <div class="container px-4 mx-auto">
    <div
      class="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl"
    >
      <div class="px-6">
        <div class="mt-6 text-center">
          <h3 class="text-4xl font-semibold leading-normal text-blueGray-700">
            ติดต่อเรา
          </h3>
          <p class="font-semibold leading-normal text-md text-blueGray-500">
            Contact Us
          </p>
        </div>

        <div class="py-5 mt-10 text-center border-t border-blueGray-200">
          <div class="flex flex-wrap">
            <div class="w-full px-6 mb-4 lg:w-3/12">
              <div
                class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-lg shadow-lg bg-emerald-400"
              >
                <i class="fas fa-phone-alt fa-2x"></i>
              </div>

              <p class="text-lg text-blueGray-500">สามารถติดต่อได้ที่เบอร์ :</p>
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
              >
                <a href="tel:+6653873890-3">(+66) 053 873890-3</a>
              </h3>

              <p class="mb-4 text-xs text-red-500">
                *หมายเหตุ : กรุณาติดต่อภายในวัน และเวลาราชการ
              </p>
            </div>
            <div class="w-full px-6 mb-4 lg:w-3/12">
              <div
                class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-lg shadow-lg bg-emerald-400"
              >
                <i class="fas fa-envelope fa-2x"></i>
              </div>
              <p class="text-lg text-blueGray-500">ติดต่อทางอีเมลของเรา :</p>
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
              >
                <a href="mailto:cs@mju.ac.th">cs@mju.ac.th </a>
              </h3>
            </div>
          </div>
          <div class="flex flex-wrap mt-10">
            <div class="w-full px-6 mb-4 lg:w-3/12">
              <div
                class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-lg shadow-lg bg-emerald-400"
              >
                <i class="fab fa-facebook-f fa-2x"></i>
              </div>

              <p class="text-lg text-blueGray-500">ติดต่อทาง Facebook :</p>
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
              >
                <a href="https://www.facebook.com/computersciencemju"
                  >วิทยาการคอมพิวเตอร์ ม.แม่โจ้</a
                >
              </h3>
            </div>
            <div class="w-full px-6 mb-4 lg:w-3/12">
              <div
                class="inline-flex items-center justify-center w-16 h-16 p-3 mb-5 text-white rounded-lg shadow-lg bg-emerald-400"
              >
                <i class="fab fa-line fa-3x"></i>
              </div>
              <p class="text-lg text-blueGray-500">ติดต่อทาง Line Offical :</p>
              <h3
                class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
              >
                <a href="https://line.me/R/ti/p/%40053vfccm">CSMJU </a>
              </h3>
            </div>

            <div
              class="w-full border-blueGray-300 px-6 border-l mb-4 text-left lg:-mt-48 lg:w-6/12"
            >
              <h3
                class="mb-6 text-2xl font-semibold leading-normal text-center text-blueGray-700"
              >
                แจ้งปัญหาของท่านให้เราทราบ / ข้อเสนอแนะ
              </h3>

              <!-- Form contact -->
              <form
                @submit.stop.prevent="onSubmit"
                enctype="multipart/form-data"
              >
                <!-- Title -->
                <div class="pt-0 mb-3 text-lg text-blueGray-500">
                  <p>หัวข้อเรื่อง</p>
                  <input
                    v-model="topic"
                    class="w-full px-3 placeholder-blueGray-300 py-2 leading-tight text-gray-700 border"
                    type="text"
                    placeholder="ชื่อโครงการ"
                  />
                  <div v-if="v$.topic.$error" class="mt-2 text-sm text-red-500">
                    {{ v$.topic.$errors[0].$message }}
                  </div>
                </div>

                <!-- detail -->
                <div class="pt-2 mb-3 text-lg text-blueGray-500">
                  <p>รายละเอียด</p>
                  <textarea
                    v-model="detail"
                    cols="30"
                    placeholder="เนื้อหา / รายละเอียด"
                    rows="5"
                    class="relative w-full px-3 py-1 text-base bg-white borderoutline-none placeholder-blueGray-300 text-blueGray-600 border-blueGray-300 focus:outline-none focus:shadow-outline"
                  ></textarea>
                  <div
                    v-if="v$.detail.$error"
                    class="mt-0 text-sm text-red-500"
                  >
                    {{ v$.detail.$errors[0].$message }}
                  </div>
                </div>

                <!-- Image preview -->
                <div class="mt-4">
                  <img
                    v-if="imgUrl"
                    :src="imgUrl"
                    class="w-full cropped-card1 rounded-lg shadow-lg border-b"
                  />
                </div>

                <!-- Upload image -->
                <div class="mb-6 text-lg text-blueGray-500">
                  <span
                    >แนบรูปภาพ
                    <span class="text-red-500 text-xs"
                      >(ไฟล์ที่อัปโหลดขนาดต้องไม่เกิน 3MB)</span
                    ></span
                  >
                  <div
                    class="relative flex items-center justify-center h-32 bg-gray-100 border-b border-blue-700"
                  >
                    <input
                      ref="fileupload"
                      type="file"
                      @change="onFileSelected"
                      accept="image/*"
                      class="w-full h-full opacity-0 p-3 bg-white"
                    />
                  </div>
                  <div v-if="v$.file.$error" class="mt-0 text-sm text-red-500">
                    {{ v$.file.$errors[0].$message }}
                  </div>
                </div>

                <!-- Recaptcha -->
                <div class="w-full text-left">
                  <vue-hcaptcha
                    :sitekey="siteKey"
                    @verify="onVerify"
                    @expired="onExpire"
                    size="normal"
                    language="en"
                    ref="vueHcaptcha"
                  >
                  </vue-hcaptcha>
                  <div
                    v-if="v$.verify.$error"
                    class="mt-0 text-sm text-red-500"
                  >
                    {{ v$.verify.$errors[0].$message }}
                  </div>
                </div>

                <!-- Button -->
                <div class="pt-2 mt-6 mb-3 text-center">
                  <button
                    @click="onCancel"
                    class="px-6 py-3 mr-2 shadow-lg font-semibold text-sm text-white uppercase transition-all duration-150 ease-linear rounded-lg outline-none bg-red-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                    type="button"
                  >
                    ยกเลิก
                  </button>
                  <button
                    class="px-6 py-3 shadow-lg font-semibold text-sm text-white uppercase transition-all duration-150 ease-linear rounded-lg outline-none bg-emerald-500 active:bg-teal-600 hover:shadow-lg focus:outline-none"
                    type="submit"
                  >
                    บันทึก
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//? API
import http from "@/services/WebpageService";
//? Image
import icon from "@/assets/images/paper.png";
//? Packages
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
import useValidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  components: {
    VueHcaptcha,
  },

  data() {
    return {
      icon,
      v$: useValidate(),

      //? Form
      topic: "",
      detail: "",
      imgUrl: "",
      file: null,

      //? Recaptcha
      siteKey: import.meta.env.VITE_SITE_KEY,
      verify: null,

      date: new Date().toString(),
    };
  },

  methods: {
    //? Upload image
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
      if (size > 3) {
        Swal.fire({
          icon: "error",
          title: "ไฟล์ที่อัปโหลดต้องมีขนาดไม่เกิน 3MB",
        }).then(() => {
          //? Reset
          this.file = null;
          this.imgUrl = "";
          this.$refs.fileupload.value = "";
        });
        return;
      }

      this.imgUrl = URL.createObjectURL(this.file);
    },

    onVerify(token, eKey) {
      this.verify = token;
    },

    onExpire() {
      this.$refs.vueHcaptcha.reset();
    },

    //? Reset form
    onCancel(e) {
      e.preventDefault();
      this.v$.$reset();
      this.topic = "";
      this.detail = "";
      this.imgUrl = "";
      this.file = null;
      this.$refs.fileupload.value = null;
      this.verify = null;
      this.$refs.vueRecaptcha.reset();
    },

    //? Submit form
    onSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        //? Set default sweetalert
        const swalWithBootstrapButtons = this.$swal.mixin({
          customClass: {
            title: "font-semibold custom",
            confirmButton:
              "px-6 py-3 ml-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
            cancelButton:
              "px-6 py-3 custom mb-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-blueGray-700 active:bg-emerald-600 hover:shadow-lg focus:outline-none",
          },
          buttonsStyling: false,
        });

        //? Confirmation submit form
        swalWithBootstrapButtons
          .fire({
            title: "ยืนยันการส่งข้อมูล",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "ยืนยัน",
            cancelButtonText: "ยกเลิก",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              let data = new FormData();
              data.append("title", this.topic);
              data.append("detail", this.detail);
              if (this.file != null) {
                data.append("image", this.file);
              }

              //? Call API
              http
                .post("complain/new", data)
                .then((res) => {
                  if (res.data.success) {
                    let msg = res.data.message;
                    swalWithBootstrapButtons
                      .fire(msg, "", "success")
                      .then(() => {
                        window.location.reload();
                      });
                  }
                })
                .catch((err) => {
                  if (err) {
                    swalWithBootstrapButtons.fire(
                      "ทำรายการไม่สำเร็จ!",
                      "",
                      "error"
                    );
                  }
                });
            } else {
              swalWithBootstrapButtons.fire("ยกเลิกการส่งข้อมูล!", "", "error");
            }
          });
      }
    },
  },

  validations() {
    return {
      topic: {
        required: helpers.withMessage("กรุณากรอกหัวข้อเรื่องก่อน", required),
      },
      detail: {
        required: helpers.withMessage("กรุณากรอกรายละเอียดก่อน", required),
      },
      verify: {
        required: helpers.withMessage("กรุณายืนยัน reCAPTCHA ก่อน", required),
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
