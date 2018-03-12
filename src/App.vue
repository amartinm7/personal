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

<style>
.profile {
  margin-top: 50px;
}
</style>
