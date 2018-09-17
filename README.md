![logo](https://cdn-images-1.medium.com/max/2000/1*nfvapd86apvGH-hNBYkYuw.png)

![logo](https://d33wubrfki0l68.cloudfront.net/92c7b4c3938bf70914c40c26c0b1e221ef558bf9/e8622/assets/images/logos/contentful-light.svg)

# personal

> A Vue.js project

Proof of concept, integrating Contentful CMS with VUE. 
Load in contentful static text and images in some content types previously created. 
The VUE app use the Contentful CDA API to get the content and show it as a kind of carousel in a Single Page Application.
Another part important is the transitions applied. Everytime you click on the next page you can see the transition 
between the pages which is a nice effect.
 
# See the application running online: 
https://amm-personal-site.netlify.com/#/blog/0

Netlify is a cloud solution similar to AWS. You can connect your github code with netlify and every time you commit your code you can deploy the app automatically
without doing any more than click a button. Works more or less like a webhook.

Keep in mind that the application was deployed using the pipeline included in to the package.json

To create the application to deploy do this:
```npm
npm run build
``` 
look in the dist folder and you'll the index.html and the dependencies:
- three js files
- one minified css

Netlify uploads these files in its bucket and publish the html file.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Screetshot of the results
![theLionAndTheKing](https://raw.githubusercontent.com/amartinm7/personal/master/theLionAndTheKing.png)
