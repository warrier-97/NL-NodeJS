/**
 * Note:
 * 1. The child process stdin is a writable stream in the parent process.
 * 2. The child process stdout and stderr are readable streams in the parent process.
 * 3. spawn() DOES NOT create a shell.
 * 4. Data is passed as and when it is generated.
 * 
 * Instructions:
 * 1. Require spawn method of child_process module
 * 2. Use spawn to run a child process to execute ```find . -type f```, another to run wc -w
 * 3. pipe the first one's output to the second's input
 * 4. Listen for data on stdout/stderr of the second and log the data
 */