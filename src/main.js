import { createApp } from "vue";
import App from "./App.vue";

//? VueRouter
import router from "./router";

//? Vuex
import store from "./store";

//? SweetAlert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

//? VCalendar
import VCalendar from "v-calendar";
import "v-calendar/dist/style.css";

//? Styles
import "./assets/styles/tailwind.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "vue3-carousel/dist/carousel.css";

//? Create app
const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueSweetalert2, options);
app.use(VCalendar, {});
app.mount("#app");
