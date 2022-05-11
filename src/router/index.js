import Vue from 'vue'
import VueRouter from 'vue-router'
/*import HomePage from '../components/HomePage.vue'
import SellPosts from '../views/SellPosts.vue'
import RentPosts from '../views/RentPosts.vue'
import LoginPage from '../views/LoginPage.vue'
import SignPage from '../views/SignPage.vue'*/

Vue.use(VueRouter)

const routes = [
 /* {
    path: '/',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/sellposts',
    name: 'sellposts',
    component: SellPosts
  },
  {
    path: '/rentposts',
    name: 'rentposts',
    component: RentPosts
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/loginpage',
    name: 'loginpage',
    component: LoginPage 
  },
  {
    path: '/signpage',
    name: 'signpage',
    component: SignPage
  },*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
