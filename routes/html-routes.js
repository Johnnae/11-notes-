const Router = require("express").Router();

const path = require('path'); 
//sends index.html as response
Router.get( '/', (req, res)=> {
    res.sendFile(path.join(__dirname, '../index.html'))
});
    
  // sends notes.html as response
Router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../notes.html'))
});

module.exports = Router;