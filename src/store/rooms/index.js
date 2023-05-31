import http from "@/services/AuthService";

const state = {
  labRooms: [],
  lectureRooms: [],
};

const mutations = {
  setLabRooms(state, payload) {
    state.labRooms = payload;
  },
  setLectureRooms(state, payload) {
    state.lectureRooms = payload;
  },
};

const actions = {
  async getRooms({ commit }) {
    try {
      const res_lab = await http.get("room/lab");
      const res_lecture = await http.get("room/lecture");
      if (res_lab?.data?.success && res_lecture?.data?.success) {
        commit("setLabRooms", res_lab.data.data);
        commit("setLectureRooms", res_lecture.data.data);
      }
    } catch (e) {}
  },
};

const getters = {
  labRooms: (state) => state.labRooms,
  lectureRooms: (state) => state.lectureRooms,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
