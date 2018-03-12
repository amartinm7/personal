<template>
  <div class="section profile-heading">
    <div class="columns">
      <div class="column is-2">
        <div class="image is-128x128 avatar">
          <img :src="imgSrc">
        </div>
      </div>
      <div class="column is-4">
        <p>
          <span>{{name}}</span>
          <span class="button is-primary is-outlined follow">Follow</span>
        </p>
      </div>
      <div class="column is-2">sdfsdaf</div>
      <div class="column is-2">sdf</div>
      <div class="column is-2">dsfdsfds</div>
    </div>
  </div>
</template>
<script>
import contentful from '../../services/contentful'
export default {
  name: 'section',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgSrc: 'https://placehold.it/256x256',
      name: ''
    }
  },
  methods: {
    getPersonalData: async function () {
      let items = await contentful.getPersonalInfo()
      console.log(items)
      this.name = items[0].fields.name['en-US']
    }
  },
  mounted: function () {
    this.getPersonalData()
  }
}
</script>
<style>
  .profile-heading {
    margin: 20px 0;
    padding-bottom: 30px;
  }
  .avatar img{
    float: right;
    border-radius: 200px;
  }
  .follow {
    float: right;
  }
</style>
