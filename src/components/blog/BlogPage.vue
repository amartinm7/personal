<template>
  <div class="columns is-fullheight">
    <div class="column left-side is-half-desktop is-hidden-touch is-full-mobile">
      <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body" v-bind:style="backgroundImageStyle">
          <div class="container has-text-centered">
            <div class="title is-1">{{coverTitle}}</div>
            <div class="title is-5">{{coverDescription}}</div>
          </div>
        </div>
      </section>
    </div>
    <div class="column right-side is-half-desktop is-full-mobile">
      <nav class="nav is-hidden-tablet">
        <div class="nav-left">
          <a class="nav-item is-brand" href="#">
            <img :src="smallImage" alt="logo">
          </a>
        </div>
      </nav>
      <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="column is-full-desktop">
              <h1 class="blog-timestamp">
                {{date}}
              </h1>
              <h1 class="blog-title">
                {{title}}
              </h1>
              <h2 class="blog-summary">
                {{content}}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import contentful from '@/services/contentful'
export default {
  name: 'BlogPage',
  data () {
    return {
      styleObject: {
        'background-image': 'url("https://images.unsplash.com/photo-1502736885509-af72c92db31a")'
      },
      coverTitle: '',
      coverDescription: '',
      title: '',
      content: '',
      backgroundImageStyle: '',
      imgSrc: '',
      date: new Date()
    }
  },
  computed: {
    smallImage: function () {
      return (this.imgSrc + '?w=750')
    }
  },
  methods: {
    getBlogPage: function () {
      let self = this
      contentful.getBlogPage().then(item => {
        console.log('item')
        console.log(item)
        this.title = item.fields.title['en-US']
        this.content = item.fields.content['en-US']
        this.coverTitle = item.fields.coverTitle['en-US']
        this.coverDescription = item.fields.coverDescription['en-US']
        contentful.getPicture(item.fields.cover['en-US'].sys.id).then((asset) => {
          self.imgSrc = asset.fields.file['en-US'].url
          self.backgroundImageStyle = { 'background-image': 'url("' + self.imgSrc + '")' }
        }).catch(console.error)
      }).catch(console.error)
    }
  },
  mounted: function () {
    this.getBlogPage()
  }}
</script>
// http://html.mijnspeelplek.com/bulma1/templates/profile.html
<style>
  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    background-color: #fff;
  }

  .columns .is-fullheight {
    margin-bottom: 0;
  }

  .footer {
    margin-top:-10px;
  }

  .left-side .hero-body {
    background-color: #999;
    background-image: url('https://hd.unsplash.com/photo-1457365050282-c53d772ef8b2');
    -ms-background-position-x: center;
    -ms-background-position-y: bottom;
    background-position: center bottom;
    background-size: cover;
    height: 100%;
  }

  .left-side .hero-body .title {
    color: #fff;
    font-weight: lighter;
  }

  .right-side .hero-body .container {
    padding: 40px 30px;
  }

  .right-side .hero-body .container .column {
    padding: 40px 30px;
  }

  .right-side .hero-body .blog-timestamp {
    font-weight: bold;
  }

  .right-side .hero-body .blog-title {
    font-size: 30px;
    font-weight: bold;
  }

  .right-side .hero-body .blog-summary {
    font-size: 18px;
    font-weight:lighter;
    line-height: 1.5;
  }
</style>
