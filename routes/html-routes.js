const Router = require("express").Router();

const path = require('path') 

Router.get( '/', (req,res)=> {
    res.sendfile(path.join)
})