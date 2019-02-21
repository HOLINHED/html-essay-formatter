'use strict'

/**
 * 
 * @param {String} raw The string to get attibutes from
 * 
 * @returns {Object} An object with the attibute name as the name, and 
 *                   its value. 
 */
function ParseAttribute(raw) {

   const split = raw.split('=');

   // TODO: Make this create the attibutes stuff lol

   return split;

}

module.exports = ParseAttribute;