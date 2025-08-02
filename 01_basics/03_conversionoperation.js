// let score = 33
// console.log(typeof score);




// let score = "33"
// console.log(typeof score);

// //how to convert a string into number

// let valueinNumber = Number(score)

// console.log(typeof valueinNumber)
// console.log(valueinNumber)



let score = "33abc"
console.log(typeof score)

let valueinNumber = Number(score)
console.log(typeof valueinNumber)
console.log(valueinNumber)//it show NaN it means it is not a number(NaN) in case of null it show 0 or in case of undefined it show NaN

// to convert the Boolean we use Boolean in place of Number.

let sum ="Aakash"   //in case of 0 it show false for boolean otherwise it shoe true in conversion of boolean.if we convert string into boolean it show always true 
console.log(typeof sum)
console.log(sum)

let isboolean = Boolean(sum)
console.log(typeof isboolean)
console.log(isboolean)



// *****************************OPERATIONS********************************


console.log("1"+2)
console.log(1+"2")
console.log("1"+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log(1+2+"2"+2+2)

console.log(true)
console.log(+true)
console.log(-true)
console.log(*true)
console.log(false)
console.log(+false)
console.log(-false)