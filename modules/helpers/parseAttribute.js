'use strict'

/**
 * 
 * @param {String} raw The string to get attibutes from
 * 
 * @returns {Object} An object with the attibute name as the name, and 
 *                   its value. 
 */
function ParseAttribute(raw) {

   // What is returned
   let attributes = {};

   //Splits string in all double quotes
   const split = raw.split("\"");

   // Iterates through string array at every value
   // since every other entry will be value, and every
   // entry before that will be a key.
   for (let i = 1; i < split.length; i += 2) {

      // Formatting key/value pairs (removing = from key and trimming)
      // emptry space from both.
      const key = split[i - 1].replace(/=/g,'').trim();
      const value = split[i].trim();

      // Inserting key/value into object
      attributes = {
         ...attributes,
         [key]: value,
      }

   }

   return attributes;

}

module.exports = ParseAttribute;