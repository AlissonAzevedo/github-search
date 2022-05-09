import { createStore } from 'vuex'
export default createStore({
  state: {
    username: '',
    favorites: [],
    user: {},
    repos: [],
    stars: ''
  },
  mutations: {
    setUsername (state, payload) {
      state.username = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setRepositories (state, payload) {
      state.repos = payload
    },
    setStarred (state, payload) {
      state.stars = payload
    }
  },
  actions: {},
  getters: {
    getUsername (state) {
      return state.username
    },
    getUser (state) {
      return state.user
    },
    getRepos (state) {
      return state.repos
    },
    getStarred (state) {
      return state.stars
    }
  },
  modules: {
  }
})
