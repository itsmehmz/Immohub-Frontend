<template >
  <div class="sellposts">
  <v-app id="rent">
    <v-app-bar
      app
      class="blue darken-4"
      dark
    >
      <div class="d-flex align-center">
        <span class="ml-5 d-flex display-1" id="immo">IMMO</span><span class="d-flex display-1 font-weight-thin">HUB</span>
      </div>

      <v-spacer></v-spacer>

      <div class="justify-space-around">
      <v-btn class="px-6 ma-3 elevation-2 primary">Login</v-btn>
      <v-btn class="px-6 ma-3 elevation-2 primary">Sign Up</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <div class="py-10 mx-16">
    <h1 class="white--text text-capitalize text-h3 text-center ">
      Selling Posts
    </h1>
      </div>
     <v-container class="my-6">
       <v-layout row wrap>
         <v-flex md5 lg3 v-for="post in posts" :key="post.id">
           <v-card flat class="text-xs-center pa-16 ma-5">
             SellPost
           </v-card>
         </v-flex>
       </v-layout>
     </v-container>
    </v-main>
  </v-app>
  </div>
</template>

<style>
#rent{
  background: url('../assets/blue.jpg');
}
</style>

<script>

export default {
  name: 'SellPosts',

  data(){
    return{
      drawer:false,
      posts:[
        {id:1,name:'house1',surface:90,location:'bm, taqadom'},
        {id:2,name:'house2',surface:110,location:'bm, mghila'},
        {id:3,name:'house3',surface:30,location:'bm, aamriya'},
        {id:4,name:'house4',surface:85,location:'bm, mo dhar'},
        {id:5,name:'house5',surface:100,location:'bm, mghila2'},
      ]
    }
  },
};
</script>