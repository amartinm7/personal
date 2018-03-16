function blogWrapper (item) {
  const get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)

  const _getTitle = () => {
    return get(['fields', 'title', 'en-US'], item)
  }

  const _getContent = () => {
    return get(['fields', 'content', 'en-US'], item)
  }

  const _getCover = () => {
    return get(['fields', 'cover', 'en-US'], item)
  }

  const _getCoverTitle = () => {
    return get(['fields', 'coverTitle', 'en-US'], item)
  }

  const _getCoverDescription = () => {
    return get(['fields', 'coverDescription', 'en-US'], item)
  }

  return {
    getTitle: _getTitle,
    getContent: _getContent,
    getCover: _getCover,
    getCoverTitle: _getCoverTitle,
    getCoverDescription: _getCoverDescription,
    rawEntry: item
  }
}
export default {
  getEntry: (entry) => {
    return blogWrapper(entry)
  }
}
