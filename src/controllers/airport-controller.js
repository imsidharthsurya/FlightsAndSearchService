const {AirportService}=require("../services/index");

const airportService=new AirportService();

const create=async(req,res)=>{
    try{
        const data=await airportService.create(req.body);
        res.status(201).json({
            data:data,
            success:true,
            message:"Successfully created airport",
            err:{}
        })
    }catch(err){
        console.log("error happened at airport controller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"error happened at airport controller",
            err:err
        })
    }
}

module.exports={
    create
}