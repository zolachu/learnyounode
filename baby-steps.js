
const array = process.argv.slice(2);

const initialValue = 0;
const sum = array.reduce((accumulator, currentValue) => accumulator + (+currentValue), initialValue);
console.log(sum);