<template>
  <blogPage :item="item" v-if="item" :maxItems="maxItems" :index="index" ></blogPage>
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
      items: [],
      item: '',
      maxItems: 0,
      index: 0
    }
  },
  methods: {
    getBlogPages: function () {
      let self = this
      contentful.getBlogPages().then(items => {
        self.items = items
        self.maxItems = items.length
        self.item = items[this.$route.params.id]
        self.index = this.$route.params.id
      }).catch(console.error)
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.item = this.items[to.params.id]
    this.index = to.params.id
    next()
  },
  mounted: function () {
    this.getBlogPages()
    console.log('mounted getBlogPages...')
  }
}
</script>
// http://html.mijnspeelplek.com/bulma1/templates/profile.html
<style>

</style>
