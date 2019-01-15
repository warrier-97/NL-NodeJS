// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
/**
```
ALTER USER 'storekeeper'@'localhost' IDENTIFIED WITH mysql_native_password BY 'awesomestorekeeper123';
``` 
 */
var mysql = require('mysql');
var data = require('./data/seed.json');

var con = mysql.createConnection({
    host: "localhost",
    user: "storekeeper",
    password: "awesomestorekeeper123",
    database: "store"
});

con.connect(function (error) {
    if (error) {
        throw error;
    }

    console.log("Connected!");
    startup();
    showProducts( 3, 2 );
    // searchProduct( 'rake' );
    // sqlInjection( '(DELETE FROM store.products WHERE id > 0)' );
    // deleteProduct( 17 );
    // updateProduct( 23, {
    //     name: 'Claw Hammer',
    //     code: 'TBX-0049'
    // });
});

function startup() {
    // data.products.forEach(function( product ) {
    //     // Reference: https://www.saowen.com/a/9524ed69492907acd448daa10a8d6b8f5cbbf5c0c1531e2a709b0879a0753be1
    //     product.releaseDate = new Date( product.releaseDate );

    //     const sql = `
    //         INSERT INTO products( name, code, releaseDate, description, price, starRating, imageUrl )
    //         VALUES ( '${product.name}', '${product.code}', FROM_UNIXTIME(${product.releaseDate.getTime() / 1000}), '${product.description}', '${product.price}', '${product.starRating}', '${product.imageUrl}' )
    //     `;

    //     con.query(sql, function( error, result ) {
    //         if( error ) {
    //             console.error( error.message );
    //             return;
    //         }

    //         console.log( `product "${product.name}" was successfully inserted` );
    //         console.dir( result.insertId )
    //     });
    // });

    const values = data.products.map(function (product) {
        const date = new Date(product.releaseDate);
        product.releaseDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        return [
            product.name,
            product.code,
            product.releaseDate,
            product.description,
            product.price,
            product.starRating,
            product.imageUrl
        ];
    });

    const sql = 'INSERT INTO products( name, code, releaseDate, description, price, starRating, imageUrl ) VALUES ?';

    con.query(sql, [values], function (error, result) {
        if (error) {
            console.error(error.message);
            return;
        }

        console.dir(result.affectedRows);
    });
}

function showProducts( numRows, offset ) {
    con.query("SELECT * FROM products ORDER BY starRating DESC LIMIT ? OFFSET ?", [ numRows, offset ], function (err, products, fields) {
        if (err) throw err;
        // console.dir( products );
        products.forEach( product => console.log( `${product.id} : ${product.releaseDate}` ) );
        // console.log( fields.map( field => field.name ) );
    });
}

function showProduct( productId ) {
    // con.query("SELECT * FROM products WHERE id = " + mysql.escape( productId ), function (err, result) {
    //     if (err) throw err;
    //     console.log( result[0].name );
    // });
    con.query("SELECT * FROM products WHERE id = ?", [productId], function (err, result) {
        if (err) throw err;
        console.log( result[0].name );
    });
}

function searchProduct( searchKey ) {
    searchKey = '%' + searchKey + '%';
    con.query("SELECT * FROM products WHERE name LIKE ? OR description LIKE ?", [ searchKey, searchKey ], function (err, result) {
        if (err) throw err;
        console.log( result[0].name );
    });
}

function deleteProduct( productId ) {
    con.query("DELETE FROM products WHERE id = ?", [ productId ], function (err, result) {
        if (err) throw err;
        console.log( 'deleted row = ', result.affectedRows );
    });
}

function updateProduct( productId, product ) {
    con.query("UPDATE products SET name = ?, code = ? WHERE id = ?", [ product.name, product.code, productId ], function (err, result) {
        if (err) throw err;
        console.log( 'affected rows = ', result.affectedRows );
    });
}

function sqlInjection( productId ) {
    const sql = "SELECT * FROM products WHERE id IN " + productId;
    console.log( 'sql = ', sql );
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log( result[0].name );
    });
}