let express=require('express');
let app=express();
let bodyparser=require('body-parser')
let port=process.env.PORT || 5000;
let projectrouter=require('./router/projectroute')
let dbconnection=require('./config/config');
let cors= require('cors');
const multer = require('multer');
let upload=multer();
app.use(express.static('views'));
app.use(express.json());
app.use(cors({
    origin:"*",
    methods:['POST','PUT','PATCH','DELETE']
}))

app.use(upload.array())




dbconnection.connect()   //connected to database

app.get('/',(req,res)=>{res.send('server is on')})



app.use('/api/project',projectrouter);

app.listen(port,()=>{
    console.log('server is mongo mongo');
})