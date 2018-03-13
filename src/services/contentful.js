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
        'content_type': 'contact',
        'include': 3
      }).then((entries) => {
        console.log(entries.items)
        resolve(entries.items)
      }).catch((err) => reject(err))
    }).catch((err) => reject(err))
  })
}
// export what you need here
export default {
  getPersonalInfo: getPersonalInfo
}
