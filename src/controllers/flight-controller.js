const {FlightService}=require("../services/index");
const {ClientErrorsCodes,ServerErrorsCodes,SuccessCodes}=require("../utils/error-codes")
const flightService=new FlightService();

const createFlight=async(req,res)=>{
    try{
        const flightBodyObj={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAiportId:req.body.arrivalAiportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
        const flight=await flightService.createFlight(flightBodyObj);
        return res.status(SuccessCodes.CREATED).json({
            data:flight,
            success:true,
            message:"Flight created successfully",
            err:{}
        })
    }catch(err){
        // console.log(err);
        return res.status(ServerErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:err
        })
    }
}

const getAllFlight=async(req,res)=>{
    try{
        const flights=await flightService.getAllFlights(req.query);
        return res.status(SuccessCodes.OK).json({
            data:flights,
            success:true,
            message:"Successfully fetched all flights data",
            err:{}
        });
    }catch(err){
        return res.status(ServerErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to get all flights",
            err:err
        })
    }
}

const getFlight=async (req,res)=>{
    try{
        const flight=await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
            data:flight,
            success:true,
            message:"Successfully fetched the flight data",
            err:{}
        });
    }catch(err){
        return res.status(ServerErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to get the flight data",
            err:err
        })
    }
}

const updateFlight=async(req,res)=>{
    try{
        const result=await flightService.updateFlight(req.params.id,req.body);
        //whatever in req body will udpate those fields in flight
        return res.status(SuccessCodes.CREATED).json({
            data:result,
            success:true,
            message:"successfully updated the flight details",
            err:{}
        })
    }catch(err){
        return res.status(ServerErrorsCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            success:false,
            message:"Not able to update the flight data",
            err:err
        })
    }
}
module.exports={
    createFlight,
    getAllFlight,
    getFlight,
    updateFlight
}