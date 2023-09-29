const express = require('express');

// Import our modular routers 
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes'); 
const PORT = process.env.PORT || 3001;


const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(api_routes) 
app.use(html_routes) 

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);