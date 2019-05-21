import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    output: ""
  },
  mutations: {
    saveTempContent(state, data) {
      state.output = data;
    }
  },
  actions: {}
});
