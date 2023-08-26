const { Router } = require('express');
let express=require('express');
let route=express.Router();

let projectcontroller=require('../control/projectcontroller');
//get 
route.get('/findproject',projectcontroller.findAllproject);
//post
route.post('/addproject',projectcontroller.addproject);
//delete
route.delete('/deleteproject/:name',projectcontroller.deleteporject);
//update
route.put('/updateproject',projectcontroller.updateproject)


module.exports=route;