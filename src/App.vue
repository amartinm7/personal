<template>
  <div>
    <a class="navbar-item" href="/blog/0">
    <router-link to="/blog/0">
      <i class="fa fa-angle-left"></i>
    </router-link>
    </a>
    <a class="navbar-item" href="/blog/2">
    <router-link to="/blog/2">
      <i class="fa fa-angle-right"></i>
    </router-link>
    </a>
    <router-view/>
  </div>
</template>
<script>
import mynav from '@/components/nav/Nav'
import mycontainer from '@/components/container/Container'
export default {
  name: 'App',
  components: {
    'mynav': mynav,
    'mycontainer': mycontainer
  }
}
</script>
// http://html.mijnspeelplek.com/bulma1/templates/profile.html
<style>
.profile {
  margin-top: 50px;
}
</style>
