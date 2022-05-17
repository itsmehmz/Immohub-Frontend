<template id="home">
    <div >
    <v-app>
    <v-app-bar
      app
      class="blue darken-4"
      dark
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <span class="ml-5 d-flex display-1" id="immo">IMMO</span>
        <span class="d-flex display-1 font-weight-thin">HUB</span>
      </div>

      <v-spacer></v-spacer>

      <div class="justify-space-around">
      <v-btn @click="$router.push('/loginpage')" class="px-6 ma-3 elevation-2 primary">Login</v-btn>
      <v-btn @click="$router.push('/signpage')" class="px-6 ma-3 elevation-2 primary">Sign Up</v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="blue darken-3">
        <nav>
            <v-list class="mt-2 ml-4" nav>
                <v-list-item @click="$router.push('/rentposts')" link>
                    <v-list-item-action>
                        <v-icon dark>widgets</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">Renting Space</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider class="black"></v-divider>
            <v-list class="mt-2 ml-4" nav>
                <v-list-item @click="$router.push('/sellposts')" link>
                    <v-list-item-action>
                        <v-icon dark>widgets</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">Selling Space</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>    
            <v-divider class="black"></v-divider>
        </nav>
    </v-navigation-drawer>

    <v-main>
        <v-container>
            <v-row justify="center">
                <v-col class="text-center">
                    <p class="text-h2 mt-16">Buy, Rent </p>
                    <p class="text-h2 mt-16">and Sell.</p>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col class="px-16 mx-16">
                    <v-text-field 
                        class="white mx-4 elev"
                        align-center
                        hide-details 
                        label="What are yo lookin for" 
                        placeholder="Search" 
                        filled 
                        rounded 
                        dense 
                        single-line 
                        append-icon="mdi-magnify">
                    </v-text-field>
                </v-col>
            </v-row>
        </v-container>
    </v-main>

    </v-app>
    </div>
</template>

<script>
    export default {
        name:'HomePage',
        data(){
            return{
                selection:'',
                drawer:false,
                //links:[{route1:'/rentposts'},{route2:'/sellposts'}]
            }
        }
    }
</script>

<style>
main{
  background: url('../assets/bluehome.jpg');
  background-size: cover;
}
</style>