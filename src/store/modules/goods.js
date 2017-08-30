import types from '../types'
import axios from 'axios'

const state = {
  goods: []
};

const getters = {
  goods(state) {
    return state.goods;
  }
};

const actions = {
  getGoods({commit, state}) {
    axios.get("/api/goods").then(res => {
      if (res.data.errno === 0) {
        commit(types.GET_GOODS, res.data.data);
      }
    })
  }
};

const mutations = {
  [types.GET_GOODS](state, data) {
    state.goods = data;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
