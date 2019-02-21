'use strict'

import ParseTag from './helpers/parseTag.js';
import ParseAttribute from './helpers/parseAttribute.js';
import ParseBody from './helpers/parseBody';

/**
 * 
 * @param {String} raw The raw text data retrieved from the .txt file.
 * 
 * @returns {Object} An object consisting of page data to be formatted.
 *        Example:  {
 *                      meta: {
 *                               author: "Dawid Klatkiewicz",
 *                               published: "8/3/2013",
 *                            },
 *                      title: "The mysterious chase",
 *                      intro: "this is the intro to my entire paper!",
 *                      bodies: [
 *                         {
 *                            intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sagittis urna. Sed consequat tortor ac porta laoreet. Nulla a.",
 *                            quote: {
 *                               txt: "hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world",
 *                               citation: "Dales, Henry. How are you doing today?. Nov. 2011. Retrived from wikipedia.",
 *                            },
 *                            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sagittis urna. Sed consequat tortor ac porta laoreet. Nulla aLorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sagittis urna. Sed consequat tortor ac porta laoreet. Nulla a",
 *                            outro: "and that's it!",
 *                         },
 *                      ],
 *                      outro: "this is the outro of my entire paper!",
 *                   }
 */
function parse(raw) {

   const parsed = {
      meta: {},
      title: "",
      intro: "",
      bodies: [],
      outro: "",
   }

   // Parse meta tag
   const meta = ParseTag(raw, 'meta');
   const metaAtt = ParseAttribute(meta, ['author', 'published']);

   parsed.meta = metaAtt;

   // Parse title tag
   const title = ParseTag(raw, 'title');

   parsed.title = title;

   // Parse intro and outro to entire document
   const intro = ParseTag(raw, 'intro');
   const outro = ParseTag(raw, 'outro');

   parsed.intro = intro;
   parsed.outro = outro;

   // Parse body
   const body = ParseBody(raw);

   parsed.bodies = body;

   // parsing complete, return data
   return parsed;

}

module.exports = parse;