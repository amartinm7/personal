/**
 * @typedef {brandsWrapper}
 * @type {object}
 * @property {entries} the contentful 'brand' entries
 * @see module:model/brandsWrapper
 */
import brandWrapper from './brandWrapper'
export default function brandsWrapper () {
  const getEntries = (entries) => {
    let wrapperList = []
    for (let i = 0; i < entries.items.length; i++) {
      wrapperList.push(brandWrapper.getEntry(entries.items[i]))
    }
    return wrapperList
  }
  return {
    getEntries: getEntries
  }
}
