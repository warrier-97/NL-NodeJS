/**
 * Note:
 * 1. exec() creates a shell - this means the command can be executed like in a shell.
 * 2. Data is buffered and passed as a whole to the callback function - not suitable when output is potentially large.
 * 
 * Instructions:
 * 1. Require exec method of child_process module.
 * 2. Use exec to execute ```find . -type f | wc -w```. The callback gets err, stdoutData and stderrData. Log these.
 */