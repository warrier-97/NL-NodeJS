console.log('log method')

var john ={
    name : 'John',
    age : 32,
    contacts : [
        'abc@xyz.com',
        'abcd@exyz.com'
    ]
}

console.log(john)
console.dir(john) // id depth not passed then same as log
console.dir(john, {depth : 0})
console.dir(john, {depth : 1})
//console.time() and timeEnd()