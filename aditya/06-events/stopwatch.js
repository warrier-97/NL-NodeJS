const events = require('events')

/*
 * on() and emit()
 */

class stopwatch extends events{
    constructor(){
        super()
    }
}

//const s = new stopwatch()
//verify if on() and emit() are inherited
//console.log(s.__proto__.__proto__)
// s.on('Hello',function(arg1,arg2){ //has to come before the emit --------- Event Listener
//     console.log(arg1,arg2)
// })
//s.emit("Hello",{x:2},"heya") //Hello is name of event rest all are the data 