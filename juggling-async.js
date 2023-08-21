const http = require('http');
const bl = require("bl");
const parallel = require("run-parallel");

parallel([
  (callback) => {
  
  	http.get(process.argv[2], (res) => {
	
	res.pipe(bl((err, data) => {
		callback(null, data.toString());
	} ))});
  }
  ,
  (callback) => {
  
  	http.get(process.argv[3], (res) => {
	
	res.pipe(bl((err, data) => { 
		callback(null, data.toString());
	} ))});
  }
  ,
  (callback) => {
  
  	http.get(process.argv[4], (res) => {
	
	res.pipe(bl((err, data) => {
		callback(null, data.toString());
	} ))});
  }
],
// optional callback
function (err, results) { 
    
	results.forEach(r => {
		console.log(r);
	})

  // the results array will equal ['one','two'] even though
  // the second function had a shorter timeout.
})