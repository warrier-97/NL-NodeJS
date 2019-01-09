/**
 * Note:
 * 1. execFile() is used to run an executable file.
 * 2. execFile() DOES NOT create a shell - it executes the given command/file - in Windows, .bat files cannot be executed with execFile() - exec() or spawn() with shell set to true is required for this.
 * 
 * Instructions:
 * 1. Require execFile method of child_process
 * 2. Run ```node --version``` using execFile. It's callback is passed err, stdoutData, stderrData. Log hese.
 * 3. Run ```./count-files.sh``` using execFile. Log as in step 2.
 */