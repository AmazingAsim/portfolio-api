let express=require('express');
let app=express();
let projectrouter=require('./router/projectroute')
let dbconnection=require('./config/config');
let cors= require('cors');
app.use(express.json());
app.use(cors({
    origin:"*",
    methods:['POST','PUT','PATCH','DELETE']
}))




dbconnection.connect()   //connected to database




app.use('/api/project',projectrouter);
app.listen(9090,()=>{
    console.log('server is mongo mongo');
})