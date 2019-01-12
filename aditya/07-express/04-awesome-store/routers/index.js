const express  = require('express')
const router = express.Router()

router.get('/',function(req,res){
    
    res.render('index',req.app.get('app-desc'))
})

module.exports = router;