import http from "@/services/AuthService";
import route from "@/router";

const state = {
  news: [],
  newsArray: [],
  newsLimit: [],
};

const mutations = {
  setNews(state, payload) {
    state.news = payload;
  },
  setNewsArray(state, payload) {
    state.newsArray = payload;
  },
  setNewsLimit(state, payload) {
    state.newsLimit = payload;
  },
};

const actions = {
  async getNews({ commit }, id) {
    try {
      const res = await http.get(`news/show/${id}`);
      if (res.data.success) {
        const data = res.data.data;
        commit("setNews", data);
      } else {
        //! Not found data
        route.push({ name: "News" });
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getNewsArray({ commit }, page) {
    try {
      const res = await http.get(`news?page=${page}`);
      const data = res.data;
      if (data.data.length > 0) {
        commit("setNewsArray", data);
      } else {
        let empty = {
          data: [],
          current_page: 1,
          total: 0,
          per_page: 0,
        };
        commit("setNewsArray", empty);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getNewsArraySearch({ commit }, { page, keyword }) {
    try {
      let formData = new FormData();
      formData.append("keyword", keyword);
      const res = await http.post(`news/search?page=${page}`, formData);
      const data = res.data;
      if (data.data.length > 0) {
        commit("setNewsArray", data);
      } else {
        let empty = {
          data: [],
          current_page: 1,
          total: 0,
          per_page: 0,
        };
        commit("setNewsArray", empty);
      }
    } catch (err) {
      console.log(err);
    }
  },

  async getNewsLimit({ commit }) {
    try {
      const res = await http.get("news/limit/3"); //? News limit 3
      if (res.data.success) {
        const data = res.data.data;
        commit("setNewsLimit", data);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const getters = {
  news: (state) => state.news,
  newsArray: (state) => state.newsArray,
  newsLimit: (state) => state.newsLimit,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
