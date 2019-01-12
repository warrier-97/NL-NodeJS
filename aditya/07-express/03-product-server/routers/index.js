const express = require('express')
const router = express.Router()


router.get('/',function(req,res){
    // Both of these will be the app object on which we will "use" this router
    //console.log( req.app, res.app );
    const app = req.app
    
    res.set('Content-Type','text/html')
    res.write("I am a store server. Products and Reviews.")
    res.write(app.get('title')+'<br>'+app.get('version'))
    res.end()
})

module.exports = router;