import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/blog/0'
    },
    {
      path: '/blog/:id',
      name: 'Blog',
      component: Blog
    }
  ]
})
