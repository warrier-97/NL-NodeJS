/**
 * spawn() and fork() are similar
 * However when forking, a communication channel is established between parent and child processes and they communicate using send() method (of process object)
 * An object is to be passed as message when calling send()
 * 
 * Instruction:
 * 1. Require fork method of child_process module
 * 2. Fork a child process that executes ./04-fork-01-child.js
 * 3. Listen for 'message' event of child. Log the received message.
 * 4. Send some message to child.
 * 5. Listen for SIGINT signal on process (use once) and log a message indicating that parent process is being exited. SIGINT is fired when Ctrl + C is keyed in the terminal.
 */