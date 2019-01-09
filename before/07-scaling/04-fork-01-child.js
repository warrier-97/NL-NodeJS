/**
 * spawn() and fork() are similar
 * However when forking, a communication channel is established between parent and child processes and they communicate using send() method (of process object)
 * An object is to be passed as message when calling send()
 * 
 * Instructions:
 * 0. Create the parent process script.
 * 1. Listen for 'message' event on process. Log the received data.
 * 2. Listen for SIGINT signal on process (use once) and log a message indicating that child process is being exited.
 * 3. Send a { counter: <next_counter_value> } message every second to parent using process.send()
 */