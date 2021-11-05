import Vue from 'vue'
import VueRouter from 'vue-router'

import ListUsers from '../components/ListUsers.vue'
import DeleteUser from '../components/DeleteUser.vue'
import EditUser from '../components/EditUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/listUsers',
  },
  {
    path: '/listUsers',
    name: 'ListUsers',
    component: ListUsers,
    props: true,
  },
  {
    path: '/deleteUser',
    name: 'DeleteUser',
    component: DeleteUser
  },
  {
    path: '/editUser/:id',
    name: 'EditUser',
    component: EditUser,
    props: true,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
