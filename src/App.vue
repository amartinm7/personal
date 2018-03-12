<template>
  <div>
    <nav-bar/>
    <container></container>
    <router-view/>
  </div>
</template>
<script>
import nav from './components/nav/Nav'
import container from './components/container/Container'
export default {
  name: 'App',
  components: {
    'nav-bar': nav,
    'container': container
  }
}
</script>
// http://html.mijnspeelplek.com/bulma1/templates/profile.html
<style>
.profile {
  margin-top: 50px;
}
</style>
