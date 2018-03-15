<template>
  <div class="hello">
    <mynav/>
    <mycontainer></mycontainer>
  </div>
</template>
<script>
import mynav from '@/components/nav/Nav'
import mycontainer from '@/components/container/Container'
export default {
  name: 'HelloWorld',
  components: {
    'mynav': mynav,
    'mycontainer': mycontainer
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
