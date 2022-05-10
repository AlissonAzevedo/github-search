<template>
<header>
    <div>
      <router-link to="/">
        <img class="logo" alt="github logo" src="../assets/logo.png">
      </router-link>
    </div>
    <div class="searchUser">
      <SearchUser/>
    </div>
</header>
</template>

<script>
import SearchUser from '../components/SearchUser.vue'
export default {
  name: 'Header',
  components: {
    SearchUser
  }
}
</script>

<style scoped>
header{
    grid-area: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 55px;
}
.logo {
    width: 250px;
}

.searchUser {
  width: 600px;
}
</style>
