const { Router } = require('express');
let express=require('express');
let route=express.Router();

let projectcontroller=require('../control/projectcontroller');
//get 
route.get('/findproject',projectcontroller.findAllproject);
route.get('/getdegree',(req,res)=>{res.sendFile('degree.png', { root: './certificate' })})
route.get('/getphase1',(req,res)=>{res.sendFile('PHASE1.png', { root: './certificate' })})
route.get('/getphase2',(req,res)=>{res.sendFile('PHASE2.png', { root: './certificate' })})
route.get('/getphase3',(req,res)=>{res.sendFile('PHASE3.png', { root: './certificate' })})
route.get('/getphase4',(req,res)=>{res.sendFile('PHASE4.png', { root: './certificate' })})
//post
route.post('/addproject',projectcontroller.addproject);
//delete
route.delete('/deleteproject/:name',projectcontroller.deleteporject);
//update
route.put('/updateproject',projectcontroller.updateproject)


module.exports=route;