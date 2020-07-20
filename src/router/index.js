import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/addBook',
    name: 'AddBook',
    component: () => import('../views/AddBook.vue')
  },
  {
    path: '/editBook/:id',
    name: 'EditBook',
    component: () => import('../views/EditBook.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
