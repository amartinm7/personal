<template>
  <div class="container">
    <my-section></my-section>
  </div>
</template>
<script>
import mySection from './Section'
export default {
  name: 'mycontainer',
  components: {'my-section': mySection}
}
</script>
<style>

</style>
