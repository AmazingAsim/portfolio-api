let express=require('express');
let app=express();
let port=process.env.PORT || 5000;
let projectrouter=require('./router/projectroute')
let db=require('./config/config');
let cors= require('cors');
app.use(express.json());
app.use(cors({
    origin:"*",
    methods:['POST','PUT','PATCH','DELETE']
}))
app.use(express.static('views'))

db.dbconnect()

app.use('/api',projectrouter);



app.listen(port,()=>{
    console.log('server is mongo mongo');
})


