<template>
    <div class="containerFavorite">
        <div class="favorite">
            <router-link to="/favorites">
               <div class="row">
                   <img src="../assets/starIconActive.svg" alt="">
                    <span>Repositorios Favoritados</span>
               </div>
            </router-link>
            <div class="row">
                <img src="../assets/starIcon.svg" alt="">
                <span>Repositorios não Favoritados</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Favorite'
}
</script>

<style scoped>
.containerFavorite {
    grid-area: favorite;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 1rem;
}
.favorite {
    height: 500px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
}
.row span{
    color: #000;
    font-size: 1rem;
}
a{
    text-decoration: none;
}
</style>
