class Product {
    // http is a dependency that is injected into Product
    constructor( id, name, categories, http ) {
        this.id = id;
        this.name = name;
        this.categories = categories;
        this.http = http;
    }

    addCategory( category, cb ) {
        this.categories.push( category );
        cb( this.categories );
    }

    updateName( name, cb ) {
        this.http && this.http.put({
            url: '/api/products/' + this.id,
            data: {
                name: name
            },
            success: function() {
                cb && cb({
                    "message": "success"
                });
            }
        });
    }
}

module.exports = Product;