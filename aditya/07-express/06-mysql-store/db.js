const mysql = require('mysql')
const data = require('./data/seed.json')

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
})

function loadProducts(){
    data.products.forEach(function(prod){
        console.log(prod)
        query = `INSERT INTO products values (${prod.name},${prod.code},${prod.releaseDate},${prod.description},${prod.price},${prod.starRating},${prod.imageUrl});`
        con.query(query,function(error,product){
            console.log(product)
        })
    })
}
loadProducts()
var q = "select * from products";
con.query(q,function(error,products){
    console.log(products)
})
