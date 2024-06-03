const {Flight}=require("../models/index")

class FlightRepository{
    
    async createFlight(data){
        console.log(data)
        try{
            const flight=await Flight.create(data);
            return flight;
        }catch{
            console.log("error happened at flight repository level");    
            throw{err}
        }
    }
}

module.exports=FlightRepository