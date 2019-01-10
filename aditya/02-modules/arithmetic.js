const sum = (x,y) => x+y
const diff = (x,y) => x-y
const mul = (x,y) => x*y
module.exports = {
    "sum":sum,
    "diff":diff,
    "mul":mul
}
//to check no of times arithmetic.js is called --console.log("Hello")
//2nd method
//module.exports = {}
//module.exports.div = (x,y) => x/y

//3rd way
// exports = moudule.exports = {}
// exports.sum = (x,y) => x+y
// exports.diff = (x,y) => x-y