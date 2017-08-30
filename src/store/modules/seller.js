import types from '../types'
import axios from 'axios'

const state = {
  seller: {},
  detailShow: false
};

const getters = {
  seller(state) {
    return state.seller;
  },
  detailShow(state) {
    return state.detailShow;
  }
};

const actions = {
  getSeller({commit, state}) {
    axios.get('/api/seller').then(res => {
      // console.log(res);
      if (res.data.errno === 0) {
        commit(types.GET_SELLER, res.data.data);
      }
    })
  },
  showDetail({commit}) {
    commit(types.SHOW_DETAIL);
  },
  hideDetail({commit}) {
    commit(types.HIDE_DETAIL);
  }
};

const mutations = {
  [types.GET_SELLER](state, data) {
    state.seller = data;
  },
  [types.SHOW_DETAIL](state) {
    state.detailShow = true;
  },
  [types.HIDE_DETAIL](state) {
    state.detailShow = false;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
