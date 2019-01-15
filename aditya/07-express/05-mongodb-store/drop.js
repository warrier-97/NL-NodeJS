const {execSync} = require('child_process')

try{
    execSync('mongo store --eval "db.dropDatabase()"')
    console.log('Dropped the database')
}
catch(err){
    console.log("DB drop error")
}