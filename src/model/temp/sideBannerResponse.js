/**
 * sideBannerResponse Factory function
 * @module sideBannerResponse
 * @param  {header} the header
 * @param  {html} the html
 * @param  {js} the js
 * @param  {css} the css
 * @param  {vendor} the vendor
 * @return {sideBannerResponse}
 * @see module:model/sideBannerResponse
 */
/**
 * @typedef {sideBannerResponse}
 * @type {object}
 * @property {header} the sidebanner header
 * @property {html} the sidebanner html
 * @property {js} the sidebanner header
 * @property {css} the sidebanner html*
 * @property {vendor} the sidebanner vendor js and css*
 * @see module:model/sideBannerResponse
 */
module.exports = (header, html, js, css, vendor) => ({header, html, js, css, vendor});
