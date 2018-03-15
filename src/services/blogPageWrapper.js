function blogWrapper (item) {
  let _item = item

  function _getItem () {
    return _item
  }

  function _getTitle (item) {
    return item.fields.title['en-US']
  }

  function _getContent (item) {
    return item.fields.content['en-US']
  }

  function _getCover (item) {
    return item.fields.cover['en-US']
  }

  function _getCoverTitle (item) {
    return item.fields.coverTitle['en-US']
  }

  function _getCoverDescription (item) {
    return item.fields.coverDescription['en-US']
  }

  return {
    getTitle: _getTitle,
    getContent: _getContent,
    getCover: _getCover,
    getCoverTitle: _getCoverTitle,
    getCoverDescription: _getCoverDescription,
    getItem: _getItem
  }
}

export default {
  blogWrapper: blogWrapper
}
