<template>
<div>
    <div class="containerInput">
        <input type="text" v-model="username" placeholder="Search" />
        <button @click="SearchUser" class="searchButton">
            <img alt="Search Icon" class="searchIcon" src="../assets/searchIcon.svg">
        </button>
    </div>
</div>
</template>

<script>
import api from '../services/api'
export default {
  name: 'SearchUser',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    async SearchUser () {
      await api.get(`${this.username}`)
        .then(response => {
          console.log(response.data)
          this.$router.push({ name: 'GithubUser', params: { username: response.data.login } })
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
    margin:30px 0;
    max-height: 50px;
}
.containerInput input {
    background-color: transparent;
    color: #000;
    font-size: 1.5rem;
    border: 2px solid #000;
    outline: none;
    height: 50px;
    width: 600px;
    padding: 0 10px;
}
.searchButton{
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 54px;
    width: 100px;
}

.searchButton .searchIcon:hover{
    transform: scale(1.1);
}
</style>
