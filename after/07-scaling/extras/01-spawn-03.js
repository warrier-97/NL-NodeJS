/**
 * The stdin, stdout, stderr can be inherited by child processed, using optional argument { stdio: 'inherit' }
 * 
 * The shell syntax can be used in spawn() using { shell: true }
 * 
 * There are other options too that help customize the child process - example 'cwd' to set the child process's current working directory, env to set a different environment for child process (by default it is the parent process.env)
 */
const { spawn } = require( 'child_process' );

const child = spawn( 'ls -al', {
    stdio: 'inherit',
    shell: true,
    cwd: '..'
});

const child2 = spawn( 'echo Home is $HOME', {
    stdio: 'inherit',
    shell: true
});

const child3 = spawn( 'echo Home is $HOME', {
    stdio: 'inherit',
    shell: true,
    env: { // a different environment for the child process
        HOME: '/Users/puranik',
        PORT: 3001
    }
});