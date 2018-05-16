import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Biji from '@/components/Biji'
import Resume from '@/components/Resume'
import BlogHome from '@/components/BlogHome'
import Blog from '@/components/Blog'
import Ga from '@/components/Ga'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/biji',
      component: Biji
    },
    {
      path: '/blog',
      component: BlogHome
    },
    {
      path: '/blog/:id',
      component: Blog
    },
    {
      path: '/resume',
      component: Resume
    },
    {
      path: '/ga',
      component: Ga
    }
  ],
  mode: 'history',
})