/**
 * The Express middleware (a static file server) can serve static files (HTML, CSS, JS, images, font files etc.) from a given folder.
 * You can configure the static file server to serve from various root folders - roots folders are probed for match in the order they are set.
 * Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL - example http://localhost:3000/about.html will return public/about.html
 * However, the path that you provide to the express.static() is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve.
 * 
 * Instructions:
 * 1. Create an Express web server as before and start it.
 * 2. Configure the static file server using express.static(). You can pass an optional options object as second - it takes properties like maxAge (cached time in milliseconds), index property for index file path (default is index.html, and this can be disabled too by setting false) etc. You can configure multiple static file server middleware. So set one for serving from public/ and once for admin/ (the second one may be triggered only for /admin routes)
 */