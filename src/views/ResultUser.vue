<template>
<div class="containerResult">
  <Favorite />
  <Result />
  <SideBar />
</div>
</template>

<script>

import Favorite from '../components/Favorite.vue'
import Result from '../components/Result.vue'
import SideBar from '../components/SideBar.vue'
import api from '../services/api'
export default {
  name: 'ResultUser',
  components: {
    Favorite,
    Result,
    SideBar
  },
  data () {
    return {

    }
  },
  created () {
    this.getRepositories()
    this.getUser()
    this.getStarred()
  },
  methods: {
    getUser () {
      api.get(`${this.$store.getters.getUsername}`)
        .then(response => {
          this.$store.commit('setUser', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getStarred () {
      api.get(`${this.$store.getters.getUsername}/starred`)
        .then(response => {
          this.$store.commit('setStarred', response.data.length)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getRepositories () {
      api.get(`${this.$store.getters.getUsername}/repos`)
        .then(response => {
          const orderDesc = response.data.sort((a, b) => b.stargazers_count - a.stargazers_count)
          this.$store.commit('setRepositories', orderDesc)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.containerResult {
  display: grid;
  grid-template-columns: 300px auto 300px;
  grid-template-rows: 55px auto;
  grid-template-areas:
    "header header null"
    "infoUser resultUser favorite";
}
</style>
