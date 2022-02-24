import { createStore } from 'vuex'

export const store = createStore({
  state: {
    page:'Profile',
    setUp:{
      span:14,
      offset:5,
    }
  },
  getters: {
  },
  mutations: {
    handleChangePage(state,payload){
      state.page = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
export function setupStore(app){
  app.use(store)
}
