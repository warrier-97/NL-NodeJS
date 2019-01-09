/**
 * Instructions:
 * 1. Require the net module and call its createServer() method to create a TCP server.
 * 2. Use server.listen() to start server on a specified port.
 * 3. The server listens for a 'connection' event and receives a socket in the callback. You can create a TCP connection to server using netcat.
 * ```
 * nc localhost 8000
 * ```
 * 4. You can respond to the connection using socket.write() passing it a string.
 * 5. Setup 'data' event handler on the socket - write back data buffer received (interpreting it as 'utf8' (which can be passed as second parameter to socket.write())).
 * 6. Setup 'end' event handler on the socket (fired on client disconnection) - log a message
 */