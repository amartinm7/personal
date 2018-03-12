import config from '../config'
import * as contentful from 'contentful-management'

export default {
  createClient () {
    var client = contentful.createClient({
      accessToken: config.CMA_ACCESS_TOKEN
    })
    return client
  },
  getSpace () {
    return this.createClient().getSpace(config.SPACE_ID)
  },
  getPersonalInfo () {
    return new Promise(function (resolve, reject) { this.getSpace().then((space) => space.getEntries().then((entries) => resolve(entries.items))).catch((err) => reject(err)) })
  }
}
