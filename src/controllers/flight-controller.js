const {FlightService}=require("../services/index");

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

const getAllFlight=async(req,res)=>{
    try{
        const flights=await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data:flights,
            success:true,
            message:"Successfully fetched all flights data",
            err:{}
        });
    }catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get all flights",
            err:err
        })
    }
}

module.exports={
    createFlight,
    getAllFlight
}