<template>
  <blogPage :item="getItem" v-if="getItem"></blogPage>
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
      items: []
    }
  },
  computed: {
    getItem: function () {
      console.log(this.$route.params.id)
      return this.items[this.$route.params.id]
    }
  },
  methods: {
    getBlogPages: function () {
      let self = this
      contentful.getBlogPages().then(items => {
        console.log('getBlogPages items...')
        console.log(items)
        self.items = items
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
