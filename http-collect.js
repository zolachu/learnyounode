const http = require("http");
const bl  = require("bl");
const concat = require("concat-stream");



http.get(process.argv[2], (res) => {
	let dat = "";

	res.pipe(bl((err, data) => { 
		console.log(data.length);
		console.log(data);
	}));



});

	
	// res.on("data", (chunk) => {
	// 	rawData += chunk; 
	// 	// console.log(chunk);
	// });

	// res.on("end", () => {
	// 	console.log(rawData.length);
	// 	console.log(rawData);
	// })
