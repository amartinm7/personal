import * as contentful from 'contentful'
import blogPageWrapper from '@/model/blogPageWrapper'
// put here all functions
function getClient () {
  var client = contentful.createClient({
    accessToken: process.env.CDA_ACCESS_TOKEN,
    space: process.env.SPACE_ID
  })
  return client
}
// function getSpace () {
//   return createClient().getSpace(process.env.SPACE_ID)
// }
function getBlogUser () {
  return new Promise(function (resolve, reject) {
    getClient().getEntries({
      'content_type': process.env.CONTENT_TYPE_USER,
      'fields.id': process.env.USER_ID
    }).then(entries => {
      if (entries && entries.items) {
        // console.log(JSON.stringify(entries))
        resolve(entries.items[0])
      } else {
        reject(new Error('No userId found, review the config files and set up a right value'))
      }
    }).catch(reject)
  })
}
function getBlogPages () {
  return new Promise(function (resolve, reject) {
    getBlogUser().then(user => {
      console.log('user id ' + JSON.stringify(user))
      getClient().getEntries({
        'content_type': process.env.CONTENT_TYPE_BLOG_PAGE,
        'include': 5,
        'order': '-sys.createdAt',
        'links_to_entry': user.sys.id
      }).then(entries => {
        let blogPageWrappers = []
        if (entries && entries.items) {
          // console.log(JSON.stringify(entries))
          entries.items.forEach(function (item) {
            blogPageWrappers.push(blogPageWrapper.getEntry(item))
          })
        }
        resolve(blogPageWrappers)
      }).catch(error => {
        console.error(error)
        reject(error)
      })
    }).catch(reject)
  })
}
function getPicture (id) {
  return new Promise(function (resolve, reject) {
    getClient().getAsset(id).then((asset) => resolve(asset))
      .catch((error) => reject(error))
  })
}
// export what you need here
export default {
  getBlogPages: getBlogPages,
  getPicture: getPicture
}
