import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    newTask: state=>{
      return state.tasks;
    }
  },
  mutations: {
    addTask: (state, payload)=>{
      return state.tasks.push({msg: payload});
    },
    deleteTask: (state, payload)=>{
      return state.tasks.splice(payload, 1);
    }
  },
})
