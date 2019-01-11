const express = require('express')
const router = express.Router()


router.get('/',function(req,res){
    res.send("I am a store server. Products and Reviews.")
})

module.exports = router;