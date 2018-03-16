/**
 * @typedef {brandWrapper}
 * @type {object}
 * @property {entry} the contentful 'brand' entry
 * @see module:model/brandWrapper
 */
export default {
  getEntry: (entry) => {
    return brandWrapper(entry)
  }
}
function brandWrapper (entry) {
  const get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)
  // brand
  const getEntryId = () => {
    return get(['sys', 'id'], entry)
  }
  const getComponentId = () => {
    return get(['sys', 'contentType', 'sys', 'id'], entry)
  }
  const getBrandLogo = () => {
    return get(['fields', 'brandLogo'], entry)
  }
  // brandLogo
  const getBrandLogoId = () => {
    return get(['sys', 'id'], getBrandLogo())
  }
  const getBrandLogoName = () => {
    return get(['fields', 'name'], getBrandLogo())
  }
  // brand image
  const getImageSrc = () => {
    return get(['fields', 'image', 'fields', 'file', 'url'], getBrandLogo())
  }

  const getImageSrcWidth = (width) => {
    return get(['fields', 'image', 'fields', 'file', 'url'], getBrandLogo()) + `?w=${width}`
  }

  const getAltText = () => {
    return get(['fields', 'image', 'fields', 'title'], getBrandLogo())
  }
  const getBrandLogoDescription = () => {
    return get(['fields', 'image', 'fields', 'description'], getBrandLogo())
  }

  return {
    getEntryId: getEntryId,
    getComponentId: getComponentId,
    getBrandLogoId: getBrandLogoId,
    getImageSrc: getImageSrc,
    getAltText: getAltText,
    getBrandLogoName: getBrandLogoName,
    getBrandLogoDescription: getBrandLogoDescription,
    getImageSrcWidth: getImageSrcWidth,
    rawEntry: entry
  }
}
