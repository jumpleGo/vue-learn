import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coins: Array,
    giving: 0,
    getting: 0,
    cardnumbercrypto: " ",
    cardnumberbank: " ",
    name: "step2",
    isblocked: false,
    src1: "",
    src2: '',
    text1: '',
    text2: '',
    utf: '',
    qr:'',
    address:''


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
    EDIT_ISBLOCKED(state) {
      state.isblocked = true

    },
    ADD_TO_DATA_LEFT(state, data) {
        state.src1 = data.src1,
        state.text1 = data.text1,
        state.utf = data.utf,
        state.qr = data.qr,
        state.address = data.address
    },
    ADD_TO_DATA_RIGHT(state, data){
      state.src2 = data.src2,
      state.text2 = data.text2
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
    addDataLeft({
      commit
    }, data) {
      commit('ADD_TO_DATA_LEFT', data)
    },
    addDataRight({
      commit
    }, data) {
      commit('ADD_TO_DATA_RIGHT', data)
    }

  },
  getters: {
    name(state) {
      return state.name
    },
    isblocked(state) {
      return state.isblocked
    },
    orderdata(state) {
      return state
    }
  }
})