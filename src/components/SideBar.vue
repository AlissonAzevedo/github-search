<template>
    <main class="containerUser">
      <div class="containerImg">
        <img :src="this.$store.getters.getUser.avatar_url" alt="avatar user">
      </div>
      <div class="containerInfo">
        <div class="infoUser">
          <h1>{{this.$store.getters.getUser.name}}</h1>
          <span>{{this.$store.getters.getUser.login}}</span>
        </div>
        <div class="row">
          <img src="../assets/organizationIcon.svg" alt="">
          <span>{{this.$store.getters.getUser.company_name}}</span>
        </div>
        <div class="row">
          <img src="../assets/locationIcon.svg" alt="">
          <span>{{this.$store.getters.getUser.location}}</span>
        </div>
        <div class="row">
          <img src="../assets/starIcon.svg" alt="">
          <span>{{this.$store.getters.getStarred}}</span>
        </div>
        <div class="row">
          <img src="../assets/repositoryIcon.svg" alt="">
          <span>{{this.$store.getters.getUser.public_repos}}</span>
        </div>
        <div class="row">
          <img src="../assets/followersIcon.svg" alt="">
          <span>{{this.$store.getters.getUser.followers}}</span>
        </div>
      </div>
    </main>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
.containerUser{
    grid-area: infoUser;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    margin-top: 1rem;
    margin-right: 1rem;
}
.containerImg{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.containerImg img{
    width: 90%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.containerInfo{
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.infoUser{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 1.8rem;
}
.infoUser h1{
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  line-height: 0.4;
}
.infoUser span{
  font-size: 1rem;
  color: #757575;
}
.row{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 5px 0;
  padding: 1px 0;
}
.row span{
  margin-left: 5px;
  color: #757575;
}
</style>
