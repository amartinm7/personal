import * as contentful from 'contentful-management'
import blogPageWrapper from '@/model/blogPageWrapper'
// put here all functions
function createClient () {
  var client = contentful.createClient({
    accessToken: process.env.CMA_ACCESS_TOKEN
  })
  console.log(client)
  return client
}
function getSpace () {
  return createClient().getSpace(process.env.SPACE_ID)
}
function getBlogUser () {
  return new Promise(function (resolve, reject) {
    getSpace().then(space => {
      space.getEntries({
        'content_type': process.env.CONTENT_TYPE_USER,
        'fields.id': process.env.USER_ID
      }).then(entries => {
        if (entries && entries.items) {
          resolve(entries.items[0])
        } else {
          reject(new Error('No userId found, review the config files and set up a right value'))
        }
      }).catch(reject)
    }).catch(reject)
  })
}
function getBlogPages () {
  return new Promise(function (resolve, reject) {
    getBlogUser().then(user => {
      getSpace().then(space => {
        space.getEntries({
          'content_type': process.env.CONTENT_TYPE_BLOG_PAGE,
          'include': 5,
          'order': '-sys.createdAt',
          'links_to_entry': user.id
        }).then(entries => {
          let blogPageWrappers = []
          if (entries && entries.items) {
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
    }).catch(reject)
  })
}
function getPicture (id) {
  return new Promise(function (resolve, reject) {
    getSpace().then((space) => {
      space.getAsset(id).then((asset) => resolve(asset)).catch((error) => reject(error))
    }).catch((error) => reject(error))
  })
}
// export what you need here
export default {
  getBlogPages: getBlogPages,
  getPicture: getPicture
}
