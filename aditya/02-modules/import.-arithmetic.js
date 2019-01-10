// const {sum,diff,mul,div} = require("./arithmetic")
// console.log(sum(5,5))

const {sum,diff} = require("./arithmetic")
const {squareOfSum} = require("./advance-arithmetic")

console.log(sum(5,5))
console.log(squareOfSum(5,5))

/* arithmetic.js executes only once even though it's being called in arithmetic-test as well as advanced-arithemtic */