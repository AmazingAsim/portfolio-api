let dbcollection=require('../models/projectmodel');

exports.findAllprojects=()=>{
    return dbcollection.find();
}

exports.addproject=(project)=>{
    console.log(project)
    return dbcollection.insertMany([project])
}

exports.deleteproject=(name)=>{
  
     console.log("Name is here    :",name)
    return dbcollection.deleteOne({name:name});
}

exports.updateproject=(project)=>{
    return dbcollection.updateOne({_id:project._id},{$set:{name:project.name,level:project.level,desc:project.desc}});
}




