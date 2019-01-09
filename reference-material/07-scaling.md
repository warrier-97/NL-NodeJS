# Reference for various topics

## Reasons for scaling apps
* Workload - someone is free to do the computation
* Availability - someone is up and running to do the computation
* Fault-tolerance - backup exists in case of data-loss etc.

## Strategies for scaling apps
* Cloning - duplicate processes that handle same piece of functionality - we will use this
* Decomposing - different pieces handle different functionality - e.g. microservices
* Splitting - different pices handle different pieces of data - E.g. sharding in databases

## The child_process module
The usual way of using a child process is
* Spawn a new process and execute a system command
* Control the input stream
* Listen on the child process's output stream

## Ways to create a child process in Node
* spawn() - Launches a command (along with arguments) in a new process - Returns a child process instance that is an event emitter
* fork() - similar to spawn() but establishes a communication channel using which parent and child processes can send messages to each other
* exec() - Used to run a command in a new shell
* execFile() - Used to run an executable file. Unlike exec() it DOES NOT create a new shell.
__Note__: All of the above have synchronous blocking versions (spawnSync(), forkSync() etc.) that wait till the child process exists. These are not normally used.

## The cluster module
The cluster module is used to clone child processes and automatically load balance computation. However this is applicable only for scaling on a single multi-core CPU machine. It is not useful when you want processes to run across different machines.

When you use the cluster module you create a master process that forks to create multiple worker processes. The master process handles incoming requests, selects a worker process (using some selection algorithm), and offloads the computation to the worker.

## Apache HTTP Server Benchmarking Tool
We use Apache HTTP Server benchmarking tool to test loads an HTTP server can handle. It comes instaled with Apache HTTP server. To make 200 concurrent connections to the server for 10 seconds for example, run
```
ab -c200 -t10 http://localhost:3000/
```
__Reference__:
* [ab tool documentation](https://httpd.apache.org/docs/2.4/programs/ab.html)
