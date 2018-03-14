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
      <div class="column is-2">{{name}}</div>
      <div class="column is-2">{{surname1}}</div>
      <div class="column is-2">{{surname2}}</div>
    </div>
  </div>
</template>
<script>
import contentful from '../../services/contentful'
export default {
  name: 'mysection',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      imgSrc: 'https://placehold.it/256x256',
      name: '',
      surname1: '',
      surname2: ''
    }
  },
  methods: {
    getPersonalData: function () {
      let self = this
      console.log('getPersonalData')
      contentful.getPersonalInfo()
        .then((items) => {
          console.log(items)
          self.name = items[0].fields.name['en-US']
          console.log(JSON.stringify(items))
        }).catch(console.error)
      contentful.getPersonalInfo2()
        .then((item) => {
          console.log('item')
          console.log(item)
          self.name = item.fields.name['en-US']
          self.surname1 = item.fields.surname1['en-US']
          self.surname2 = item.fields.surname2['en-US']
          // console.log(JSON.stringify(item.fields.picture['en-US'].sys.id))
          contentful.getPicture(item.fields.picture['en-US'].sys.id).then((asset) => {
            self.imgSrc = asset.fields.file['en-US'].url
          }).catch(console.error)
        }).catch(console.error)
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
