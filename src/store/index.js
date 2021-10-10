import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
    itemId: 0,
    oldDataForChangePayment: {},
    indexOfOldPayment: 0
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    deletePayment (state, payload) {
      const elPos = state.paymentsList.indexOf(payload)
      state.paymentsList.splice(elPos, 1)
    },
    saveOldDataForPayment (state, payload) {
      state.oldDataForChangePayment = payload
      state.indexOfOldPayment = state.paymentsList.indexOf(payload)
    }
    // changePayment (state, payload) {
    //   state.paymentsList.splice(state.indexOfOldPayment, 1, { id: state.oldDataForChangePayment.id, date: payload.date, category: payload.category, amount: payload.amount })
    // }
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(
            [
              { id: 1, date: '29.03.2020', category: 'Sport', amount: 290 },
              { id: 2, date: '28.03.2020', category: 'Food', amount: 169 },
              { id: 3, date: '29.03.2020', category: 'Transport', amount: 80 },
              { id: 4, date: '30.03.2020', category: 'Food', amount: 499 },
              { id: 5, date: '30.03.2020', category: 'Education', amount: 1200 },
              { id: 6, date: '30.03.2020', category: 'Transport', amount: 65 },
              { id: 7, date: '31.03.2020', category: 'Clothes', amount: 750 },
              { id: 8, date: '31.03.2020', category: 'Food', amount: 327 },
              { id: 9, date: '31.03.2020', category: 'Transport', amount: 110 }
            ]
          )
        }, 100)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },
    fetchCategoryList ({ commit }) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve([
            'Food', 'Transport', 'Education', 'Sport', 'Clothes'
          ])
        }, 1000)
      }).then(res => {
        commit('setCategoryList', res)
      })
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    // getFullSum: state => {
    //   return state.paymentsList.reduce((res, cur) => res + cur.amount, 0)
    // },
    getPaymentsListId: state => state.paymentsList[state.paymentsList.length - 1].id,
    getCategoryList: state => state.categoryList,
    getOldPayment: state => state.oldDataForChangePayment
  }
})
