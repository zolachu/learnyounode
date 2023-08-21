const fs = require("fs");

const buffer = fs.readFileSync(process.argv[2]);

const length = buffer.toString().split("\n").length;
if (length === 0) {
	console.log(0);
} else {
	console.log(length - 1);
}
