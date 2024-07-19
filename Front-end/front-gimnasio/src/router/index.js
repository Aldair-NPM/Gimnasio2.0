import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../components/Login.vue'
import RegisterUser from '../components/RegisterUser.vue'
import Menu from '../components/Menu.vue'
import Dashboard from '@/components/dashboard.vue'
import Persona from '@/components/Persona.vue'
import Membresias from '@/components/Membresias.vue'
import Miembros from '@/components/Miembros.vue'
import TransaccionPagos from '@/components/TransaccionPagos.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children:[
        {     path: '/personas', name: 'personas', component: Persona},
        {     path: '/membresias', name: 'membresias', component: Membresias},
        {     path: '/miembros', name: 'miembros', component: Miembros},
        {     path: '/transaccionPagos', name: 'transaccionPagos', component: TransaccionPagos}
      ]
    },
    {
      path: '/page/:sectionSlug',
      name: 'dynamicContent',
      // route level code-splitting
      // this generates a separate chunk (dynamicContent.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: dynamicContent" */ '../views/DynamicContent.vue')
    }
  ]
})

export default router
