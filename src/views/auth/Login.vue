<template>
  <div class="container h-full px-4 mx-auto custom mt-12 mb-24">
    <div class="flex items-center justify-center">
      <div class="w-full px-4 lg:w-4/12">
        <div
          class="cssanimation sequence fadeInBottom relative flex flex-col w-full min-w-0 break-words border-0 rounded-lg shadow-lg bg-blueGray-200"
        >
          <div class="px-6 py-6 mb-0 rounded-t">
            <div class="mb-3 text-center">
              <h4 class="text-xl font-bold text-blueGray-500">เข้าสู่ระบบ</h4>
            </div>

            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>

          <!-- Form Login -->
          <div class="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form @submit.stop.prevent="handleSubmit">
              <!-- Username -->
              <div class="relative w-full mb-3">
                <label class="block mb-2 text-md font-normal text-blueGray-600">
                  <b> อีเมล </b>
                  <span class="text-xs"> (E-mail) </span>
                </label>
                <div class="wrapper">
                  <input
                    v-model="username"
                    type="text"
                    class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                    placeholder="เช่น mju6204101XXX@mju.ac.th"
                  />
                </div>
              </div>
              <div
                v-if="v$.username.$error"
                class="my-2 text-sm text-left text-red-500"
              >
                {{ v$.username.$errors[0].$message }}
              </div>

              <!-- Password -->
              <div class="relative w-full mb-3">
                <label class="block mb-2 text-md font-normal text-blueGray-600">
                  <b> รหัสผ่าน </b>
                  <span class="text-xs"> (Password) </span>
                </label>
                <input
                  v-model="password"
                  :type="type"
                  class="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                  placeholder="รหัสผ่าน"
                />
                <button @click="submit" type="submit" class="hidden">
                  Submit
                </button>
              </div>
              <div
                v-if="v$.password.$error"
                class="my-2 text-sm text-left text-red-500"
              >
                {{ v$.password.$errors[0].$message }}
              </div>

              <!-- Checkbox -->
              <div class="relative w-full mb-3">
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    @click="showPassword"
                    type="checkbox"
                    class="w-5 h-5 ml-1 transition-all duration-150 ease-linear border-0 rounded form-checkbox text-blueGray-700"
                  />
                  <span class="ml-2 text-sm text-blueGray-600">
                    แสดงรหัสผ่าน (Show)
                  </span>
                </label>
              </div>

              <!-- Recaptcha -->
              <div class="mb-3 mt-6 block w-full overflow-x-auto">
                <vue-hcaptcha
                  :sitekey="siteKey"
                  @verify="onVerify"
                  @expired="onExpire"
                  size="normal"
                  language="en"
                  ref="vueHcaptcha"
                >
                </vue-hcaptcha>
              </div>
              <div
                v-if="v$.verify.$error"
                class="my-2 text-sm text-left text-red-500"
              >
                {{ v$.verify.$errors[0].$message }}
              </div>

              <!-- Button -->
              <div class="mt-6 text-center">
                <button
                  class="w-full px-6 py-3 mb-1 mr-1 text-sm text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-blueGray-600 hover:shadow-lg focus:outline-none"
                  type="submit"
                >
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//? Packages
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";
import useValidate from "@vuelidate/core";
import { required, minLength, helpers } from "@vuelidate/validators";
import Swal from "sweetalert2";
import UAParser from "ua-parser-js";

//? APIs
import mju from "@/services/MJUService";
import http from "@/services/WebpageService";

//? Set default sweetalert
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  customClass: {
    title: "custom",
  },
});

export default {
  components: {
    VueHcaptcha,
  },

  data() {
    return {
      //? Validate
      v$: useValidate(),

      //? Form values
      username: "",
      password: "",

      //? Type of password
      type: "password",

      //? Recapcha Site Key
      siteKey: import.meta.env.VITE_SITE_KEY,

      //? Recaptcha verification
      verify: null,
    };
  },

  mounted() {
    //? Backward
    if (localStorage.getItem("user")) {
      history.forward();
    }
  },

  methods: {
    onVerify(token, eKey) {
      this.verify = token;
    },

    onExpire() {
      this.$refs.vueHcaptcha.reset();
    },

    showPassword() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },

    //? Loading animation
    loading(status) {
      if (status) {
        const loading = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          customClass: {
            title: "custom",
          },
        });

        loading.fire({
          icon: "info",
          title: "รอสักครู่...",
        });
      }
    },

    //? Handle submit
    handleSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.loading(true);
        this.userLogin();
      }
    },

    //? User login
    async userLogin() {
      try {
        let form = new FormData();
        form.append("username", this.username);
        form.append("password", this.password);
        const response = await mju.post("login/mju/ad", form);
        const user = response.data;
        //? Check login status
        if (user.status === "success") {
          //? Check user type
          if (user.type[0] === "personnel") {
            this.setPersonnel(user);
          } else {
            //? User type is 'student'
            this.setStudent(user);
          }
        } else {
          //? Login failed
          this.loading(false);
          Toast.fire({
            icon: "error",
            title: "เข้าสู่ระบบไม่สำเร็จ อีเมลหรือรหัสผ่านไม่ถูกต้อง",
          }).then(() => {
            //? Reset password
            this.password = "";
          });
        }
      } catch (error) {
        if (error) {
          this.loading(false);
          Toast.fire({
            icon: "error",
            title: "เข้าสู่ระบบไม่สำเร็จ กรณาลองใหม่อีกครั้ง",
          }).then(() => {
            //? Reload page
            window.location.reload();
          });
        }
      }
    },

    //? Set personnel data to local storage
    setPersonnel(data) {
      let permission = { role: 1 };
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("permission", JSON.stringify(permission));
      this.loading(false);
      Toast.fire({
        icon: "success",
        title: "กำลังเข้าสู่ระบบ",
      }).then(() => {
        //? Call LoginCheck function to save user login history
        this.saveLoginHistory();
        //? then redirect to personnel service page
        this.$router.push({ name: "PersonnelService" });
      });
    },

    //? Set student data to local storage
    setStudent(data) {
      let permission = { role: 2 };
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("permission", JSON.stringify(permission));
      this.loading(false);
      Toast.fire({
        icon: "success",
        title: "กำลังเข้าสู่ระบบ",
      }).then(() => {
        //? Call LoginCheck function to save user login history
        this.saveLoginHistory();
        //? then redirect to student service page
        this.$router.push({ name: "StudentService" });
      });
    },

    getDeviceLoginInfo() {
      let paser = new UAParser();
      let result = paser.getResult();
      return `${result?.browser?.name} ${result?.browser?.version}`;
    },

    //? Save user login history
    async saveLoginHistory() {
      try {
        let user = JSON.parse(window.localStorage.getItem("user"));
        let email = user.email;
        let type = user.type[0];
        let device = this.getDeviceLoginInfo();

        let data = new FormData();
        data.append("email", email);
        data.append("user_type", type);
        data.append("device", device);

        //? Call api to save user login history
        await http.post("checksignin/new", data);
      } catch (err) {
        if (err) {
          console.log(err);
        }
      }
    },
  },

  validations() {
    return {
      username: {
        required: helpers.withMessage("ป้อนอีเมลผู้ใช้งานก่อน", required),
      },
      password: {
        required: helpers.withMessage("ป้อนรหัสผ่านก่อน", required),
        minLength: helpers.withMessage(
          ({ $params }) => `รหัสผ่านต้องไม่น้อยกว่า ${$params.min} ตัวอักษร`,
          minLength(6)
        ),
      },
      verify: {
        required: helpers.withMessage(
          "กรุณากดยืนยันการยืนยันตัวตนก่อน",
          required
        ),
      },
    };
  },
};
</script>
