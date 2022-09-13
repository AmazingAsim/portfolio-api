let mongoose=require('mongoose');

let schema=mongoose.Schema({
name:{type:String,require:true},
desc:{type:String,require:true},
url:{type:String,require:true},
image:{type:String,require:true}
})

let projectmodel=mongoose.model('projects',schema)

module.exports=projectmodel;