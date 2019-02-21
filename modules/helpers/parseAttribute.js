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

   //Splits string by new line \n
   const atts = raw.split('\n')
      .filter(string => string.length > 0);

   //Iterates through every line
   for (let att of atts) {

      // Splits at = to get into [key, value] format
      const split = att.split('=');

      // Iterates through split key/value array 
      for (let i = 1; i < split.length; i += 2) {

         // Creates key value pair to be added into the object
         const key = split[i - 1].trim();
         const value = split[i].trim().replace(/"/g, '');

         // Adds key vaule pair to ojbect
         attributes = {
            ...attributes,
            [key]: value,
         }

      }
   }

   return attributes;

}

module.exports = ParseAttribute;