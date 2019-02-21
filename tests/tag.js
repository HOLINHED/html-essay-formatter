const ParseTag = require('../modules/helpers/parseTag.js');

// RAW DATA TO TEST
const raw = 
`
<tag1>
   inside tag1
</tag1>
<tag2>
   inside tag2
   howdy howdy
</tag2>
<tag3>
   inside tag3
   hi
   hi
</tag3>
`;

// EXPECTED RESPONSES
const response = 
[
   "inside tag1",
   "inside tag2 howdy howdy",
   "inside tag3 hi hi",
];

// TESTING TAG 1
const tag1 = ParseTag(raw, 'tag1');

console.log('Test one status:',
   tag1 === response[0] ? 'PASSING' : 'FAILING'
);

// TESTING TAG 2
const tag2 = ParseTag(raw, 'tag2');

console.log('Test two status:',
   tag2 === response[1] ? 'PASSING' : 'FAILING'
);

// TESTING TAG 3
const tag3 = ParseTag(raw, 'tag3');

console.log('Test three status:',
   tag3 === response[2] ? 'PASSING' : 'FAILING'
);