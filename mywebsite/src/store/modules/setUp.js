
import {
  CHANGE_PAGE
} from '../../constants/mutations/index'
const state = {
  page:'Profile',
}
const getters = {

}
const mutations = {
  [CHANGE_PAGE](state,payload){
    state.page = payload;
  }
}
const actions = {

}

export default {
  namespaced: true,state,getters,mutations,actions
}