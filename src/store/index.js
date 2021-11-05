import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDataSource: []
  },
  getters: {
		userDataSource: state => {
			return state.userDataSource;
		}
  },
  mutations: {
    setUserDataSource(state, value) {
			state.userDataSource = value;
		},
  },
  actions: {
  },
  modules: {
  }
})
