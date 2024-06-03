const {FlightService}=require("../services/index");

const flightService=new FlightService();

const createFlight=async(req,res)=>{
    try{
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"Flight created successfully",
            err:{}
        })
    }catch(err){
        // console.log(err);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:err
        })
    }
}


module.exports={
    createFlight
}