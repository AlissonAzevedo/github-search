<template>
  <div class="containerResult">
    <Header/>
  </div>
  <router-view/>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.containerResult {
  display: grid;
  grid-template-columns: 300px auto 300px;
  grid-template-rows: 55px auto;
  grid-template-areas:
    "header header null"
    "infoUser resultUser favorite";
}
</style>
