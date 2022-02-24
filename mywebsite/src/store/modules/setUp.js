
const state = {
  page:'Profile',
    layout:{
      span:14,
      offset:5,
    },
}
const getters = {

}
const mutations = {
  handleChangePage(state,payload){
    state.page = payload;
  }
}
const actions = {

}

export default {
  namespaced: true,state,getters,mutations,actions
}