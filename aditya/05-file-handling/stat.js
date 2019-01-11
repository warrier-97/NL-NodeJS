const fs = require("fs")

fs.stat("./personal-website/index.html",function(error,stats){
        console.dir(stats.size)
        console.log(stats.blocks)
        console.log(new Date(stats.atimeMs))
})

