const path = require('path')
//path module only for creating a string path not for creating or accessing
const dataFOlderPath = path.join(__dirname,'../..','data') // only constructing a path not creating or searching
const dataFOlderPath1 = path.resolve(__dirname,'data') // only constructing a path not creating or searching

console.log(dataFOlderPath)
console.log(dataFOlderPath1)

const pathParts =path.parse(__filename) // object with key:value important deatils of given path
console.dir(pathParts)

path.format(pathParts)


//path allows to use ../..