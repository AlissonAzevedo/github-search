<template>
  <main class="container">
    <img alt="github logo" src="../assets/logo.png">
    <SearchUser/>
  </main>
</template>

<script>
// @ is an alias to /src
import SearchUser from '@/components/SearchUser.vue'

export default {
  name: 'Home',
  components: {
    SearchUser
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
</style>
