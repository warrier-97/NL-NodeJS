/**
 * Because cluster module uses fork() under-the-hood, the master and the slaves can communicate with each other using process.send() and process.on().
 * 
 * We illustrate a simple broadcast here from master to slaves to avoid multiple DB request. Consider an app like cricinfo which publishes latest scores of an ongoing match. Instead of making multiple DB requests per slave (as and when HTTP requests are received), we can make one HTTP request in the master in a set time interval and communicate it to all slaves.
 * 
 * Instructions:
 * 1. In master, cluster.workers stores details of all workers. The child process object is cluster.workers[i].process
 * 2. Send a welcome message to each worker in the format 'Hello worker <worker_id>'. You can get the worker id from cluster.workers[i].id
 * 3. Write code to setup match score and then repeatedly get updates and pass it on to workers in the form of a message.
 * 4. In slave process, require the slave process script
 */