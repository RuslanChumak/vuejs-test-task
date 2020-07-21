import Vue from 'vue'
import VueRouter from 'vue-router'
import addBook from '../views/AddBook'
import editBook from '../views/EditBook'

Vue.use(VueRouter)

  const routes = [
  
  {
    path: '/addBook',
    name: 'AddBook',
    component: addBook
  },
  {
    path: '/editBook/:id',
    name: 'EditBook',
    component: editBook
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
