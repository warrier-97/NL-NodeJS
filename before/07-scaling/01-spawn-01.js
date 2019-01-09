/**
 * spawn() executes a command in a child process. It is used for executing well-known commands that Node.js can resolve against the system path.
 * 
 * To execute scripts we usually use execFile()
 * 
 * Note:
 * 1. The child process stdin is a writable stream in the parent process.
 * 2. The child process stdout and stderr are readable streams in the parent process.
 * 3. spawn() DOES NOT create a shell - this is why the command and the arguments are passed separately to spawn().
 * 4. Data is passed as and when it is generated - its is preferable to use spawn when output is potentially large.
 * 
 * Instructions:
 * 1. Require "child_process and extract the spawn method"
 * 2. Spawn child to execute ```ls``` command, passing argument '-al'. This returns a child process object
 * 3. Handle data event on stdout of child. Log the received data.
 * 4. Do step 3 for stderr.
 * 5. Hanle the exit event on child process. The callback is passed code and signal.
 */