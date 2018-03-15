import config from '../config'
import * as contentful from 'contentful-management'
// put here all functions
function createClient () {
  var client = contentful.createClient({
    accessToken: config.CMA_ACCESS_TOKEN
  })
  console.log(client)
  return client
}
function getSpace () {
  console.log('getSpace')
  return createClient().getSpace(config.SPACE_ID)
}
function getPersonalInfo () {
  return new Promise(function (resolve, reject) {
    getSpace().then((space) => {
      console.log(space)
      space.getEntries({
        'content_type': process.ENV.CONTENT_TYPE_BLOG_PAGE,
        'include': 5
      }).then((entries) => {
        console.log('entries')
        console.log(entries)
        resolve(entries.items)
      }).catch((err) => reject(err))
    }).catch((err) => reject(err))
  })
}
function getPersonalInfo2 () {
  return new Promise(function (resolve, reject) {
    getSpace().then((space) => {
      console.log(space)
      space.getEntry('2QFi6D9fG0s2YMqo0kmKQE')
        .then((entry) => {
          console.log('entry.item')
          console.log(entry)
          resolve(entry)
        }).catch((err) => reject(err))
    }).catch((err) => reject(err))
  })
}
function getBlogPage () {
  return new Promise(function (resolve, reject) {
    getSpace().then((space) => {
      console.log(space)
      space.getEntry('4LmUjxFPvicW4GG88UIMK4')
        .then((entry) => {
          console.log('entry.item')
          console.log(entry)
          resolve(entry)
        }).catch((err) => reject(err))
    }).catch((err) => reject(err))
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
  getPersonalInfo: getPersonalInfo,
  getPersonalInfo2: getPersonalInfo2,
  getBlogPage: getBlogPage,
  getPicture: getPicture
}
