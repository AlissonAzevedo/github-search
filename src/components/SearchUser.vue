<template>
<div>
  <!--<Message v-show="isValidUser" msg="Infelizmente não encontramos este usuário ://"/>-->
  <div class="containerInput">
    <input type="text" v-model="username" :placeholder="this.$store.getters.getUsername" />
    <button @click="SearchUser" class="searchButton">
        <img alt="Search Icon" class="searchIcon" src="../assets/searchIcon.svg">
    </button>
  </div>
</div>
</template>

<script>
// import Message from '../components/Message.vue'
import api from '../services/api'
export default {
  name: 'SearchUser',
  components: {
    // Message
  },
  data () {
    return {
      username: '',
      isValidUser: false
    }
  },
  methods: {
    async SearchUser () {
      this.$store.commit('setUsername', this.username)
      await api.get(`${this.username}`)
        .then(response => {
          // console.log(response.data)
          this.$store.commit('setUser', response.data)
          this.isValidUser = true
          this.GetRepos()
          this.GetStarred()
          this.$router.push('/result')
        })
        .catch(error => {
          setTimeout(() => {
            this.isValidUser = true
            this.username = ''
          }, 1000)
          console.log(error)
        })
    },
    async GetRepos () {
      await api.get(`${this.$store.getters.getUsername}/repos`)
        .then(response => {
          const orderDesc = response.data.sort((a, b) => b.stargazers_count - a.stargazers_count)
          this.$store.commit('setRepositories', orderDesc)
        })
        .catch(error => {
          console.log(error)
        })
    },
    async GetStarred () {
      await api.get(`${this.$store.getters.getUsername}/starred`)
        .then(response => {
          this.$store.commit('setStarred', response.data.length)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.containerInput {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin:30px 0;
    max-height: 50px;
}
.containerInput input {
    background-color: transparent;
    color: #757575;
    font-size: 1.5rem;
    border: 2px solid #000;
    outline: none;
    height: 50px;
    width: 85%;
    padding: 0 10px;
}
.searchButton{
    background-color: #000;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 54px;
    width: 15%;
}

.searchButton .searchIcon:hover{
    transform: scale(1.1);
}

</style>
