const fs = require('fs');
const path = require('path');


module.exports = function (__dirname, file_ext, callback) {
	fs.readdir(__dirname, (err, files) => {
	if (err) {
		return callback(err);
	}
	const array = [];
	const ext = "." + file_ext;
	files.forEach(file => {
		if (path.extname(file) === ext) {
			array.push(file);
		}
	})
	
	callback(null, array);
	
})
}
// fs.readdir(process.argv[2], (err, files) => {
// 	if (err) throw err;

// 	const extension = "." + process.argv[3];
// 	files.forEach(file => {
// 		if (path.extname(file) === extension) {
// 			console.log(file);
// 		}
// 	})
	
// })