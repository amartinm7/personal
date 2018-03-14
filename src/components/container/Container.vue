<template>
  <div class="container">
    <my-section></my-section>
    <my-grid></my-grid>
  </div>
</template>
<script>
import mySection from './Section'
import myGrid from './Grid'
export default {
  name: 'mycontainer',
  components: {
    'my-section': mySection,
    'my-grid': myGrid
  }
}
</script>
<style>

</style>
