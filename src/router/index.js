import { createRouter, createWebHistory  } from 'vue-router'
import Layout from '../pages/Layout/Layout.vue'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Messages from '../pages/Messages.vue'


const router = createRouter({
    history: createWebHistory(),
    // path和component對應關係的位置
    routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:
      [
          {
            path: '/Home',
            name: 'Home',
            component: Home,
          },
          {
            path: '/About',
            name: 'About',
            component: About,
          },
          {
            path: '/Messages',
            name: 'Messages',
            component: Messages,
          },
      ]
    },

  
  ]
  })

  export default router

