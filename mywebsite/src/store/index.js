import { createStore } from 'vuex'

export const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
export function setupStore(app){
  app.use(store)
}
