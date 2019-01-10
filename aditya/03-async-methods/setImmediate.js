console.log('1')

setImmediate(function(){
    console.log('2');
},0)
console.log('3')
setImmediate(function(){
    console.log('4');
},5000)

console.log('5')

//NONBLOCKING