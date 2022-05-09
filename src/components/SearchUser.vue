<template>
<div>
  <Message v-show="isValidUser" msg="Infelizmente não encontramos este usuário ://"/>
  <div class="containerInput">
    <input type="text" v-model="username" :placeholder="this.$store.state.username" />
    <button @click="SearchUser" class="searchButton">
        <img alt="Search Icon" class="searchIcon" src="../assets/searchIcon.svg">
    </button>
  </div>
</div>
</template>

<script>
import Message from '../components/Message.vue'
import api from '../services/api'
export default {
  name: 'SearchUser',
  components: {
    Message
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
          this.$router.push('/result')
        })
        .catch(error => {
          setTimeout(() => {
            this.isValidUser = true
            this.username = ''
          }, 1000)
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
    width: 90%;
    padding: 0 10px;
}
.searchButton{
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 54px;
    width: 10%;
}

.searchButton .searchIcon:hover{
    transform: scale(1.1);
}

</style>
