<template>
  <blogPage :item="item" v-if="item"></blogPage>
</template>
<script>
import blogPage from '@/components/blog/BlogPage'
import contentful from '@/services/contentful'
export default {
  name: 'Blog',
  components: {
    'blogPage': blogPage
  },
  data () {
    return {
      item: ''
    }
  },
  methods: {
    getBlogPages: function () {
      let self = this
      contentful.getBlogPages().then(items => {
        console.log('getBlogPages items...')
        console.log(items)
        // this.title = item.fields.title['en-US']
        // this.content = item.fields.content['en-US']
        // this.coverTitle = item.fields.coverTitle['en-US']
        // this.coverDescription = item.fields.coverDescription['en-US']
        // contentful.getPicture(item.fields.cover['en-US'].sys.id).then((asset) => {
        //   self.imgSrc = asset.fields.file['en-US'].url
        //   self.backgroundImageStyle = { 'background-image': 'url("' + self.imgSrc + '")' }
        // }).catch(console.error)
        self.item = items[0]
      }).catch(console.error)
    }
  },
  mounted: function () {
    this.getBlogPages()
  }
}
</script>
// http://html.mijnspeelplek.com/bulma1/templates/profile.html
<style>

</style>
