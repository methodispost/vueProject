import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import goods from './modules/goods'
import seller from './modules/seller'
import ratings from './modules/ratings'

Vue.use(Vuex);

export default new Vuex.Store({
  getters,
  actions,
  mutations,
  modules: {
    goods,
    seller,
    ratings
  }
})
