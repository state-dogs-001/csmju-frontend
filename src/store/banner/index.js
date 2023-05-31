import http from "@/services/AuthService";

const state = {
  banners: [],
};

const mutations = {
  setBanners(state, payload) {
    state.banners = payload;
  },
};

const actions = {
  async getBanners({ commit }) {
    try {
      const res = await http.get("banners");
      if (res.data.success) {
        const data = res.data.data;
        commit("setBanners", data);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const getters = {
  banners: (state) => state.banners,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
