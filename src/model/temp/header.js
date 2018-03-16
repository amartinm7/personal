/**
 * @typedef {header}
 * @type {object}
 * @property {wrapperList} a list of the sideBannerWrapper
 * @property {params} the params
 * @property {config} the config of the service
 * @see module:model/header
 */

const logger = require("../logger").getInstance();

module.exports = (wrapperList, params, config) => {
    let component, version, entryId, domain, environment, requestId;

    try {
        component = wrapperList[0].getComponentId();
        version = config.packageVersion;
        entryId = wrapperList.map(item => item.getEntryId());
        domain = params.domain;
        environment = config.STAGE;
        requestId = params.requestId;
    } catch (e) {
        logger.error("Error transforming entry to json response", e);
    }

    return {
        "component": component,
        "version": version,
        "entry-id": entryId,
        "domain": domain,
        "environment": environment,
        "request-id": requestId
    };
};
