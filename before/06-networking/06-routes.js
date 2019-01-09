/**
 * Instructions:
 * On request received by HTTP server, check req.url and switch like so
 * /home
 *      Send HTTP response code 301 with header { Location: '/' } ); This causes a redirect.
 * /
 *      serve index.html
 * /about
 *      serve about.html
 * anything else
 *      server 404.html
 */