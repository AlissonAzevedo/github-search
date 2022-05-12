<template>
    <div class="containerResultRepo">
        <div v-for="repo in this.$store.getters.getRepos" :key="repo.id" class="containerRepo">
            <div class="containerRepoInfo">
                <div class="row">
                    <h3>{{repo.name}}</h3>
                    <div class="rowStar">
                      <img @click="addFavorite(repo)" :src="this.star_url" alt="stars"/>
                    </div>
                    <!--<div v-else class="starEnable">
                      <img src="../assets/starIconActive.svg" alt="stars"/>
                    </div>-->
                </div>
                <p>{{repo.description}}</p>
                <div class="containerStars">
                    <img src="../assets/starIcon.svg" alt="stars"/>
                    <span>{{repo.stargazers_count}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ResultUser',
  data () {
    return {
      star_url: require('../assets/starIcon.svg')
    }
  },
  methods: {
    addFavorite (repo) {
      this.$store.dispatch('Favorite', repo)
      // console.log(this.$store.getters.getFavorite)
    }
  }
}
</script>

<style scoped>
.containerResultRepo{
    grid-area: resultUser;
    width: 100%;
    margin-top: 1rem;
}
.containerRepo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 1rem;
}
.containerRepoInfo{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    background-color: #fff;
}
.row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.containerStars{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.containerStars img{
  width: 20px;
  margin-right: 10px;
}
p{
  font-size: 0.8rem;
  text-align: start;
  color: #757575;
  line-height: 0.4;
}
h3{
  color: #000;
  line-height: 0.4;
}
span{
  color: #757575;
}
.rowStar{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.rowStar img{
  cursor: pointer;
}
</style>
