const {AirportService}=require("../services/index");
const {ClientErrorsCodes,ServerErrorsCodes,SuccessCodes}=require("../utils/error-codes")

const airportService=new AirportService();

const create=async(req,res)=>{
    try{
        const data=await airportService.create(req.body);
        res.status(SuccessCodes.CREATED).json({
            data:data,
            success:true,
            message:"Successfully created airport",
            err:{}
        })
    }catch(err){
        console.log("error happened at airport controller");
        return res.status(ServerErrorsCodes.INTERNAL_SERVER_ERROR).json({
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