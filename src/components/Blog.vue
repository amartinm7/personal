<template>
  <blogPage :item="getItem" v-if="getItem" :maxItems="maxItems" :index="index" ></blogPage>
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
      maxItems: 0
    }
  },
  computed: {
    getItem: function () {
      return this.items[this.$route.params.id]
    },
    index: function () {
      return this.$route.params.id
    }
  },
  methods: {
    getBlogPages: function () {
      let self = this
      contentful.getBlogPages().then(items => {
        self.items = items
        self.maxItems = items.length
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
