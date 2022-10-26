import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    selectedImg: null
  },
  getters: {
    getCards: state=>{
      return state.cards;
    }
  },
  mutations: {
    addCard: (state, payload)=>{
      state.cards.push({name: payload, imagePreviewURL: state.selectedImg})
    },
    deleteCard: (state, payload)=>{
      state.cards.splice(payload, 1);
    },
    previewImage: (state, payload)=>{
      const file = payload;
      if (file) {
        state.selectedImg = URL.createObjectURL(file);
        URL.revokeObjectURL(file);
      } else {
        state.selectedImg = null;
      }
    }
  },
  actions:{
    addCard(context, payload){
      context.commit('addCard', payload);
    },
    deleteCard(context, payload){
      context.commit('deleteCard', payload);
    },
    previewImage(context, payload){
      context.commit('previewImage', payload);
    }
  }
})
