console.dir( process, { depth : 0 } );

// Exercise: explore this object
// Deadline: 11:05

// 1. How will you find the  process id of the running node process?
console.log( process.pid );

// 2. How will you get access to standard input, output and error streams?
console.log( process.stdin, process.stdout, process.stderr );

// 3. Which method will you use to write to the standard output?
process.stdout.write( 'hello process\n' );

// 4. How will you read from the standard input (console)?
process.stdout.write( 'Enter a city name : ' );
process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`data: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});

// 5. How will you stop the currently running process?
process.exit( 0 );

console.log( 'After line where exit was called' );