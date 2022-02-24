import { createStore } from 'vuex'
import experience from './modules/experience'
import setUp from './modules/setUp'
import abilities from './modules/abilities'
import projects from './modules/projects'
import contact from './modules/contact'
export const store = createStore({
  
  modules: {
    experience,
    setUp,
    abilities,
    projects,
    contact
  }
})
export function setupStore(app){
  app.use(store)
}
