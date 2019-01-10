console.log(process)

setImmediate(function() {
    console.log('inside set immediate')
})

setTimeout(function(){
    console.log('inside Timeout function')
},0)

process.nextTick(function() {
    console.log('inside process.nextTick function')
})

console.log('Last line of file')