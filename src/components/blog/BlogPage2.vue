<template>
  <div class="columns is-fullheight">
    <div class="column left-side is-half-desktop is-hidden-touch is-full-mobile">
      <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="title is-1">My Blog</div>
            <div class="title is-5">A blog about stuff</div>
          </div>
        </div>
      </section>
    </div>
    <div class="column right-side is-half-desktop is-full-mobile">
      <nav class="nav is-hidden-tablet">
        <div class="nav-left">
          <a class="nav-item is-brand" href="#">
            <img src="@/assets/logo.png" alt="logo">
          </a>
        </div>

        <div class="nav-center">
          <a class="nav-item" href="#">
            <span class="icon">
              <i class="fa fa-github"></i>
            </span>
          </a>
          <a class="nav-item" href="#">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
          </a>
        </div>

        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu">
          <a class="nav-item" href="#">
            Home
          </a>
          <a class="nav-item" href="#">
            Documentation
          </a>
          <a class="nav-item" href="#">
            Blog
          </a>

          <span class="nav-item">
            <a class="button">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              <span>Tweet</span>
            </a>
            <a class="button is-primary" href="#">
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </span>
        </div>
      </nav>
      <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body">
          <div class="container">
            <div class="column is-full-desktop">
              <h1 class="blog-timestamp">
                2 days ago
              </h1>
              <h1 class="blog-title">
                Cras feugiat euismod sem accumsan ultrices.
              </h1>
              <h2 class="blog-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ornare malesuada dolor ut dictum. Pellentesque eget orci nisl. Vivamus sit amet ullamcorper elit. Donec mattis scelerisque dui sed convallis.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BlogPage2',
  backgroundStyle: 'background-image: url(\'https://hd.unsplash.com/photo-1457365050282-c53d772ef8b2\')'
}
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
