import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import ItemContainer from '../components/ItemContainer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // children: [
    //   {
    //     name: 'ItemByCategory',
    //     path: ':category',
    //     component: ItemContainer
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/addPage',
    name: 'AddPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddPage.vue')
  },
  {
    path: '/editPage',
    name: 'EditPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EditPage.vue')
  },
  {
    path: '*',
    component: { template: '<h1>404 not found</h1>' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('access_token')) {
    if (to.name === 'Home') return next('/login')
    else if (to.name === 'AddPage') return next('/login')
    else if (to.name === 'EditPage') return next('/login')
  } else {
    if (to.name === 'Login') return next('/')
  }
  next()
})

export default router
