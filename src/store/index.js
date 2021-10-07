import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
    // itemId: 0,
    paymentsListStorage: {
    },
    page: 'page1',
    pageList: []
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    setPaymentsListDataForPage (state, payload) {
      state.pageList = Object.keys(state.paymentsListStorage)
      // console.log(state.pageList)
      if (!state.pageList.includes(state.page, 0)) {
        state.paymentsListStorage[state.page] = payload
        // console.log(state.pageList)
      } else {
        console.log('страница уже загружена в хранилище')
      }
      state.paymentsList = state.paymentsListStorage[state.page]
    },
    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },
    setCategoryList (state, payload) {
      state.categoryList = payload
    },
    changePageNumber (state, payload) {
      state.page = payload
    }
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
    },
    fetchDataForPage ({ commit, state }) {
      return new Promise(resolve => {
        setTimeout(() => {
          const page = state.page
          const paymentsListStorage = {
            page1: [
              { id: 1, date: '29.03.2020', category: 'Sport', amount: 290 },
              { id: 2, date: '28.03.2020', category: 'Food', amount: 169 },
              { id: 3, date: '29.03.2020', category: 'Transport', amount: 80 }
            ],
            page2: [
              { id: 4, date: '30.03.2020', category: 'Food', amount: 499 },
              { id: 5, date: '30.03.2020', category: 'Education', amount: 1200 },
              { id: 6, date: '30.03.2020', category: 'Transport', amount: 65 }
            ],
            page3: [
              { id: 7, date: '31.03.2020', category: 'Clothes', amount: 750 },
              { id: 8, date: '31.03.2020', category: 'Food', amount: 327 },
              { id: 9, date: '31.03.2020', category: 'Transport', amount: 110 }
            ]
          }
          resolve(paymentsListStorage[page])
        }, 100)
      }).then(res => {
        commit('setPaymentsListDataForPage', res)
      })
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    // getFullSum: state => {
    //   return state.paymentsList.reduce((res, cur) => res + cur.amount, 0)
    // },
    // getPaymentsListId: state => {
    //   state.itemId = state.paymentsList[state.paymentsList.length - 1].id
    //   console.log(state.itemId)
    // },
    getCategoryList: state => state.categoryList,
    getPageList: state => state.pageList,
    getPageNumber: state => state.page
  }
})
