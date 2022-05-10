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

export default {
  name: 'ResultUser',
  components: {
    Favorite,
    Result,
    SideBar
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
