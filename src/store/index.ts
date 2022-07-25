import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: "Ir ao mercado", concluido: false },
      { id: 2, title: "Comprar ração", concluido: false },
      { id: 3, title: "Ir ao pediatra", concluido: false },
    ],
  },
  mutations: {
    addTasks(state, title) {
      if (title) {
        state.tasks.push({
          id: new Date().getTime(),
          title,
          concluido: false,
        });
      }
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
  },
  actions: {},
  modules: {},
});
