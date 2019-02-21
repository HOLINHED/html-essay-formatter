'use strict'

/**
 * 
 * @param {String} raw The full raw page data 
 * @param {String} tag The desired tag to parse data from
 * 
 * @returns {String} Whatever is between the specified tag
 *                   replacing \n with a space
 */

function ParseTag(raw, tag) {

   // Isolated whatever is between specifid tag
   const isolated = raw.split(`<${tag}>`)[1]
      .split(`</${tag}>`)[0];

   // Splits string at all \n and removes empty strings
   const split = isolated.split('\n')
      .filter(string => string.length > 0);

   //sets initial value at 0 because there could be a \n
   //at the first sentence.
   let string = split[0].trim();

   //adds every other string with \n replaced with a regular space
   for (let i = 1; i < split.length; i++) {
      string += split[i].replace(/\s\s+/g,' ');
   }

   return string;

}

module.exports = ParseTag;