'use strict'


//FILE READER
if (process.argv.length < 3){
	
	const path = process.argv[1];
	const filename = path.split("\\"), file = filename[filename.length - 1];
	
	console.error(`Usage: node ${file} FILENAME`);
	process.exit(1);
}

const fs = require('fs'), filename = process.argv[2];
const file = fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	parse(data);
});