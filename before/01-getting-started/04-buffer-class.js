/**
 * Buffer represents a raw block of binary data - It isn't a JS language data structure and is not allocated by the V8 runtime on its heap
 * 
 * Instructions:
 * 1.1 Create a Buffer object using Buffer.alloc - it is passed the number of bytes to allocate - it initializes bytes to 0. Log and explore.
 * 1.2 Create another Buffer object using Buffer.allocUnsafe (faster, but NOT recommended) - it is passed the number of bytes to allocate - it does no initialization. Log and explore.
 * 
 * 2.1 Define a string (with some special Unicode characters) and create a Buffer from it using Buffer.from( string ). Log and explore.
 * 2.2 Also check the values of str.length and the corresponding bufferObject.length (if there were special Unicode characters these values will be different)
 */