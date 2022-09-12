const mongoclient=require('mongodb').MongoClient;

let url='mongodb+srv://AmazingAsim:AmazingAsim3000@amazingasim.tqrgz.mongodb.net/AmazingAsimportfolio?retryWrites=true&w=majority';

let dbclient;


//module.exports={connect};

exports.connect=()=>{
    console.log('connect is called')
    mongoclient.connect(url).then(res=>{
        console.log('mongo is connected')
        dbclient=res;
    }).catch(err=>{
        console.log('error',err)
    })
}


exports.getcollection=(name)=>{
    return dbclient.db('AmazingAsimportfolio').collection(name);
}

console.log('someting here ')