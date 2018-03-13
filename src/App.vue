<template>
  <div>
    <nav-bar/>
    <container></container>
    <router-view/>
  </div>
</template>
<script>
import mynav from './components/nav/Nav'
import mycontainer from './components/container/Container'
export default {
  name: 'App',
  components: {
    'nav-bar': mynav,
    'container': mycontainer
  }
}
</script>
// http://html.mijnspeelplek.com/bulma1/templates/profile.html
<style>
.profile {
  margin-top: 50px;
}
</style>
