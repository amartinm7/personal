import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }
  ]
})
