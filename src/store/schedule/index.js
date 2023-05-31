import http from "@/services/AuthService";
import route from "@/router";

const state = {
  activity: [],
  activities: [],
};

const mutations = {
  setActivity(state, payload) {
    state.activity = payload;
  },

  setActivities(state, payload) {
    state.activities = payload;
  },
};

const actions = {
  async getActivity({ commit }, id) {
    try {
      const res = await http.get(`activity/show/${id}`);
      if (res.data.success) {
        commit("setActivity", res.data.data);
      } else {
        route.push({ name: "Schedule" });
      }
    } catch (e) {}
  },

  async getActivities({ commit }, page) {
    try {
      const res = await http.get(`activities?page=${page}`);
      let data = res?.data;
      if (data?.data?.length > 0) {
        commit("setActivities", data);
      } else {
        let empty = {
          data: [],
          current_page: 1,
          total: 0,
          per_page: 0,
        };
        commit("setActivities", empty);
      }
    } catch (e) {}
  },

  async searchActivities({ commit }, { page, keyword }) {
    try {
      let formData = new FormData();
      formData.append("keyword", keyword);
      const res = await http.post(`activity/search?page=${page}`, formData);
      let data = res?.data;
      if (data?.data?.length > 0) {
        commit("setActivities", data);
      } else {
        let empty = {
          data: [],
          current_page: 1,
          total: 0,
          per_page: 0,
        };
        commit("setActivities", empty);
      }
    } catch (e) {}
  },
};

const getters = {
  activityStore: (state) => state.activity,
  activitiesStore: (state) => state.activities,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
