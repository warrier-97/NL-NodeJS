const os = require( 'os' );

// query processor info
console.log( 'os.cpus() : ', os.cpus() );

// query the network interfaces
console.log( 'os.networkInterfaces() : ', os.networkInterfaces() );

// query system memory and its status
console.log( 'os.totalmem() : ', os.totalmem() );
console.log( 'os.freemem() : ', os.freemem() );

// platform: Linux | Windows NT | Darwin
console.log( 'os.type() : ', os.type() );

// info about logged in user
console.log( 'os.userInfo() : ', os.userInfo() );

// constants including error codes, signal codes etc.
// Note: This is not a method unlike the ones above
console.log( 'os.constants : ', os.constants );