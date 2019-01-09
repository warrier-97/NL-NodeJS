/** 
 * View engines combine HTML stucture with data to produce views at run-time.
 * 
 * We can use view engines like Pug (formerly Jade), handlebars or EJS with Express. Here, we contrast use of Pug and EJS.
 * To install pug execute ```npm install --save pug```
 * To install ejs execute ```npm install --save ejs```
 * 
 * Notes:
 * In a pug template elements are whitespace-indented. Attributes are enclosed in parenthesis after element name. List of Attribute-value pairs are comma-separated.
 * 1. Doctype is declared using ```doctype html```
 * 2. Variable interpolation is done using #{variable}
 * 3. Iterating in pug when items is an array 
 * ```each items in items```
 * 
 * In an EJS template
 * 1. Variable interpolation is done using <%=variable%>
 * 2. JS is executed within <% %>
 * 3. Iteration is using JS looping constructs.
 * 
 * Instructions:
 * 1. Create a views/ folder and add the products.pug, products.ejs template files
 * 2. Set the folder with for views with the 'views' key (use app.set())
 * 3. Set the view engine using the 'view engine' key (try both 'pug' and 'ejs' as the value)
 * 
 * Now handle routes to serve files. Data is found in data/seed.json.
 * 4. Use res.json() to serve products json if a query parameter '?format=json' is present. 
 * 5. Add a route '/products' that uses res.render() to displat the products page - try both pug and ejs. This is passed the name of the view (don't give file extension) and an object with data for the view.
 * 6. Routes can contain variable path fragments. In this case a placeholder is specified using ':'. To configure a product detail page path say '/products/:id' - req.params will contain the runtime value for variable path fragments. Use this to find the requested product data and serve the compiled html again using req.render().
 * 
 * Note: app.set() can be used to set any key-value pairs to be used across the application. However, some of the keys have a special meaning - for example, the key 'views' represents 
 */