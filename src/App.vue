<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  /*import HomePage from '../components/HomePage.vue'
  import SellPosts from '../views/SellPosts.vue'
  import RentPosts from '../views/RentPosts.vue'
  import LoginPage from '../views/LoginPage.vue'
  import SignPage from '../views/SignPage.vue'  */
  export default {
    name: 'App',
    //components:{HomePage,SellPosts,RentPosts,LoginPage,SignPage}
  }
</script>

<style>
#App{
background-image: url('./assets/bluehome.jpg');
background-size: cover;
}
</style>

