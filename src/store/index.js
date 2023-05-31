import { createStore } from "vuex";
import personnel from "./personnel";
import banner from "./banner";
import news from "./news";
import document from "./document";
import schedule from "./schedule";
import rooms from "./rooms";

const store = createStore({
  modules: {
    personnel,
    banner,
    news,
    document,
    schedule,
    rooms,
  },
});

export default store;
