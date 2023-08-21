const mymodule= require("./mymodule.js");

// console.log("hi");



mymodule(process.argv[2], process.argv[3], (err, data) => {

	if (err) throw err;
	// console.log(data);
	data.forEach(file =>{
		console.log(file);
	})
})