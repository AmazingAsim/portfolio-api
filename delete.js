let mongoclient=require('mongodb').MongoClient;
let url="mongodb://localhost:27017";
let myob='portfolio'

mongoclient.connect(url,(err,client)=>{
    if(!err){
        console.log('Database connect successfully');
        let db=client.db(myob);
        db.collection('projects').updateone({_id:100},{$set:{desc:"dude you are gusseing correct"}},(err1,res)=>{
            if(!err1){
                if(res.modifiedCount>0 && res.matchedCount>0){
                    console.log('record updated')
                }

                if(res.matchedCount>0){
                    console.log('record present but didt update')
                }
                else{
                    console.log('record not present')
                }
            }else{
                console.log(err1)
            }
            client.close();
        })
    }
    else{
        console.log(err)
    }
})