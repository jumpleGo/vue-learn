import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    giving: 0,
    getting: 0,
    cardnumbercrypto: " ",
    cardnumberbank: " ",
    name: "step2",
    isblocked: false

  },
  mutations: {
    EDIT_PATH(state, path) {
      state.name = path
    },
    ADD_PRICE(state, price) {
      state.giving = price.sellprice,
        state.getting = price.buyprice,
        state.cardnumbercrypto = price.cardnumbercrypto,
        state.cardnumberbank = price.cardnumberbank
    },
   EDIT_ISBLOCKED(state){
    
       state.isblocked = true
     
   }
  },
  actions: {
    addPrice({
      commit
    }, price) {
      commit('ADD_PRICE', price)
    },
    editpath({
      commit
    }, path) {
      commit('EDIT_PATH', path)
    },

  },
  getters: {
    price1(state) {
      return state
    },
    name(state) {
      return state.name
    },
    isblocked(state){
      return state.isblocked
    }
  }
})