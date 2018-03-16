/**
 * @typedef {sideBannerWrapper}
 * @type {object}
 * @property {entry} the contentful entry
 * @see module:model/sideBannerWrapper
 */

const Analytics = require("@uxt/delivery-commons/model/analytics") || {};

class SideBannerWrapper extends Analytics {
    constructor(contentType, entry) {
        super(contentType, entry);
    }

    //Side banner
    getEntryId() {
        return this.get(["sys", "id"], this.entry);
    }

    getComponentId() {
        return this.get(["sys", "contentType", "sys", "id"], this.entry);
    }

    getTargetLink() {
        return this.get(["fields", "targetLink"], this.entry);
    }

    getBannerAnalytics() {
        return this.get(["fields", "bannerAnalytics"], this.entry);
    }

    getZone() {
        return this.get(["fields", "zone"], this.entry);
    }

    //Side banner image

    getImageSrc() {
        return this.get(["fields", "image", "fields", "image", "fields", "file", "url"], this.entry);
    }

    getAltText() {
        return this.get(["fields", "image", "fields", "altText"], this.entry);
    }

    //Side banner analytics

    getUtmMedium() {
        return this.get(["fields", "utmMedium"], this.getBannerAnalytics());
    }

    getUtmCampaign() {
        return this.get(["fields", "utmCampaign"], this.getBannerAnalytics());
    }

    getUtmContent() {
        return this.get(["fields", "utmContent"], this.getBannerAnalytics());
    }

    getUtmSupplier() {
        return this.get(["fields", "utmSupplier", "fields", "name"], this.getBannerAnalytics());
    }

    getUtmPromo() {
        return this.get(["fields", "utmPromo"], this.getBannerAnalytics());
    }
}

module.exports = (contentType, entry) => new SideBannerWrapper(contentType, entry);
