import http from "@/services/AuthService";

const state = {
  documentsArray: [],
};

const mutations = {
  setDocuments(state, payload) {
    state.documentsArray = payload;
  },
};

const actions = {
  async getDocuments({ commit }, page) {
    try {
      const res = await http.get(`documents?page=${page}`);
      const data = res.data;
      if (data.data.length > 0) {
        commit("setDocuments", data);
      }
    } catch (err) {
      console.log(err);
    }
  },
};

const getters = {
  documentsArray: (state) => state.documentsArray,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
