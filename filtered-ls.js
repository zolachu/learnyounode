const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, files) => {
	if (err) throw err;

	const extension = "." + process.argv[3];
	files.forEach(file => {
		if (path.extname(file) === extension) {
			console.log(file);
		}
	})
	
})