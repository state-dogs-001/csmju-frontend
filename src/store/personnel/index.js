import http from "@/services/AuthService";
import staticTeachers from "@/json/teachers";
import staticStaffs from "@/json/staffs";

const state = {
  teachers: [],
  staff: [],
  cv: [],
};

const mutations = {
  setTeachers(state, payload) {
    state.teachers = payload;
  },
  setStaff(state, payload) {
    state.staff = payload;
  },
  setCv(state, payload) {
    state.cv = payload;
  },
};

const actions = {
  async getTeachers({ commit }) {
    try {
      const res = await http.get("personnel/filter/teacher");
      if (res.data.success) {
        const data = res.data.data;
        commit("setTeachers", data);
      }
    } catch (err) {
      commit("setTeachers", staticTeachers);
    }
  },
  async getStaff({ commit }) {
    try {
      const res = await http.get("personnel/filter/staff");
      if (res.data.success) {
        const data = res.data.data;
        commit("setStaff", data);
      }
    } catch (err) {
      commit("setStaff", staticStaffs);
    }
  },
  async getCv({ commit }, id) {
    try {
      const res = await http.get(`cv/show/${id}`);
      if (res.data.success) {
        const data = res.data.data;
        commit("setCv", data);
      }
    } catch (err) {
      commit("setCv", []);
    }
  },
};

const getters = {
  teachers: (state) => state.teachers,
  staff: (state) => state.staff,
  cv: (state) => state.cv,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
