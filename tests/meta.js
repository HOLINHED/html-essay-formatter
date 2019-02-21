'use strict'

const ParseTag = require('../modules/helpers/parseTag.js');
const ParseAttribute = require('../modules/helpers/parseAttribute.js');

// DATA TO TEST
const raw = 
`
<meta>
author="dawid klatkiewicz"
published="07/02/2000"
</meta>
`

// EXPECTED RESPONSE
const response = {
   author: "dawid klatkiewicz",
   published: "07/02/2000",
}

const meta = ParseTag(raw, 'meta');

const metaAtt = ParseAttribute(meta);

console.log("Status:",
   JSON.stringify(response) == JSON.stringify(metaAtt) ? "PASSING" : "FAILING");
