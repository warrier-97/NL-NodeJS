const mysql = require('mysql')

var con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'password',
    database :'testStore',
    port: 3306
});

con.connect(function(error){
    if(error){
        throw err;
    }
    console.log('Database connection error');
})

var q = "select * from products";
con.query(q,function(error,products){
    console.log(products)
})
