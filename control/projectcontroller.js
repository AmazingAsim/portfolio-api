let projectrepo=require('../repo/projectrepo');

exports.findAllproject=async (req,res)=>{
    let products= await projectrepo.findAllprojects()
    res.json(products)
};


exports.addproject=async (req,res)=>{
    let projectobj=req.body;
    console.log(projectobj);
    try{
        let project=await projectrepo.addproject(projectobj);
        if(project.acknowledged){
            res.send('record added smoothly')
        }
       
    }
    catch(err){
        res.send(err);
        console.log(err)
    }
   
}


exports.deleteporject=async (req,res)=>{
    let pId=req.params.name;
    try{
        console.log('controller log'+pId)
        let result=await projectrepo.deleteproject(pId);
        res.send(result)

    }
    catch(err){
        console.log(err);
res.send(err);
    }
}

exports.updateproject=async (req,res)=>{
    let project=req.body;
    try{
        let result= await projectrepo.updateproject(project);
        res.send(result)
    }
    catch(err){
        console.log(err)
      res.send(err);
    }
}
