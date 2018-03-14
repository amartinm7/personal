<template>
  <div class="columns" >
    <my-card v-for="(item, key, index) in items" :key="index" ></my-card>
  </div>
</template>
<script>
import myCard from './Card'
export default {
  name: 'myGrid',
  components: {
    'my-card': myCard
  },
  data () {
    return {
      items: {
        1: 'hello1',
        2: 'hello2',
        3: 'hello3',
        4: 'hello4'
      }
    }
  }
}
</script>
<style>

</style>
