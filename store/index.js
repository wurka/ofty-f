import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    counter: 0,
    backend: "http://localhost:9000/",
    orders: [{
      id: 0,
      status: "запрос",
      dateFrom: "05.12.20",
      dateTo: "15.12.20",
      images: [],
      commentary: "комментарий о товаре",
      payment: "11 200",
      bail: "54 000",
      company: "4 кота",
      phone: "8-963-256-55-68"
    }]
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
});

export default store
