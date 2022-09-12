const mongoclient=require('mongodb').MongoClient;

let url='mongodb://localhost:27017/';
let dbclient;
let connect=()=>{
    
}

//module.exports={connect};

exports.connect=()=>{
    mongoclient.connect(url).then(res=>{
        console.log('mongo is connected')
        dbclient=res;
    }).catch(err=>{
        console.log(err)
    })
}

exports.getcollection=(name)=>{
    return dbclient.db('portfolio').collection(name);
}
console.log('someting here')