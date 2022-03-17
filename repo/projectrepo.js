let dbcollection=require('../config/config');
exports.findAllprojects=()=>{
    let project=dbcollection.getcollection('projects');
    return project.find().toArray();
}

exports.addproject=(project)=>{
    console.log(project)
    return dbcollection.getcollection('projects').insertOne(project)
}

exports.deleteproject=(name)=>{
  

    return dbcollection.getcollection('projects').deleteOne({name:name});
}

exports.updateproject=(project)=>{
    return dbcollection.getcollection('project').updateOne({_id:project._id},{$set:{name:project.name,level:project.level,desc:project.desc}});
}




