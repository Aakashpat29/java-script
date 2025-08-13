const myarr = [0,1,2,3,4,5]
console.log(myarr)
myarr.push(6)
console.log(myarr)
myarr.unshift(4,2)
console.log(myarr)



//***********************SLICE()*********************************** */

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]



const fruit = ["banana", "orange", "apple", "mango"];
console.log(fruit.splice(1,2));
console.log(fruit);