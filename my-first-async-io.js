const fs = require('fs');

fs.readFile(process.argv[2],'utf8',(err, data) => {
	if (err) throw err;
	const length = data.split("\n").length;
	console.log(length === 0 ? 0 : length - 1) ;

})

// console.log(process.argv[2]);

