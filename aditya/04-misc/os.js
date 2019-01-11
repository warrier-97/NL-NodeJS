const os = require('os')

// console.log(os)
// console.dir(os)

//console.log(process,{depth:1})
// process id of a rudding process   : 
console.log(process.pid)
//access to stdin,stdout and std err : 
//-------------------console.log(process.stdin,process.stdout,process.stderr)
//method to write to standard output : 
console.log(process.stdout.write("Crap"))
// method to read from std in        : 
process.stdout.write("Enter a city name : ")
process.stdout.setEncoding("utf8")
process.stdin.read();
process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      process.stdout.write(`data: ${chunk}`);
    }
  });  
process.stdin.on('end', () => {
  process.stdout.write('end');
});
//stop running process               : process.kill(pid) ; process.abort() ; process.exit()
process.exit(0)
console.log("After exit")