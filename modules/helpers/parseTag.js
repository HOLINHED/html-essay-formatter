'use strict'

/**
 * 
 * @param {String} raw The full raw page data 
 * @param {String} tag The desired tag to parse data from
 * 
 * @returns {String} Whatever is between the specified tag
 */

function ParseTag(raw, tag) {

   const split = raw.split(`<${tag}>`);

   const partOne = split[1];

   const split2 = partOne.split(`</${tag}>`);

   const partTwo = split2[0];

   return partTwo;
}

module.exports = ParseTag;