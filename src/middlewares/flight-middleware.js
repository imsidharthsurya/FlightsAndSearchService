const validateCreateFlight=(req,res,next)=>{
    if( !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAiportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        return res.status(401).json({
            data:{},
            success:false,
            message:"Invalid req body to create flight",
            err:'require parameters are missing from the body'
        })
    }
    next();
}

module.exports={
    validateCreateFlight
}