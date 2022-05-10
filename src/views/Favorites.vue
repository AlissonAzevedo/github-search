<template>
  <main class="container">
        <div class="containerResultRepo">
          <div v-for="repo in this.$store.getters.getFavorite" :key="repo.id" class="containerRepo">
            <div class="containerRepoInfo">
                <div class="row">
                    <h3>{{repo.name}}</h3>
                    <div class="starDisabled">
                      <img @click="removeFavorite(repo)" src="../assets/starIconActive.svg" alt="stars"/>
                    </div>
                </div>
                <p>{{repo.description}}</p>
                <div class="containerStars">
                    <img src="../assets/starIcon.svg" alt="stars"/>
                    <span>{{repo.stargazers_count}}</span>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'Favorites',
  methods: {
    removeFavorite (repo) {
      this.$store.dispatch('RemoveFavorite', repo)
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
.starDisabled, .starEnable img{
  cursor: pointer;
}
</style>
