import { createStore } from 'vuex'
export default createStore({
  state: {
    username: '',
    favorites: [],
    user: {},
    repos: [],
    stars: '',
    error: '',
    favorite: []
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
    },
    setError (state, payload) {
      state.error = payload
    },
    setAddFavorite (state, payload) {
      state.favorite.push(payload)
      state.favorite = state.favorite.filter((repo, i) => state.favorite.indexOf(repo) === i)
    },
    setRemoveFavorite (state, payload) {
      state.favorite = state.favorite.filter((favorite) => {
        if (state.favorite.indexOf(favorite) === payload) {
          state.favorite.splice(payload, 1)
        }
        return favorite
      })
    }
  },
  actions: {
    Favorite ({ commit }, payload) {
      commit('setAddFavorite', payload)
    },
    RemoveFavorite ({ commit }, payload) {
      commit('setRemoveFavorite', payload)
    }
  },
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
    },
    getError (state) {
      return state.error
    },
    getFavorite (state) {
      return state.favorite
    }
  },
  modules: {
  }
})
