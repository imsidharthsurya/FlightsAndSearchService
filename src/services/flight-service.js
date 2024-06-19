const {FlightRepository,AirplaneRepository}=require("../repository/index")
const {compareTime}=require("../utils/helper")

class FlightService{
    constructor(){
        this.flightRepository=new FlightRepository();
        this.airplaneRepository=new AirplaneRepository();
    }

    async createFlight(data){
        console.log(data)
        //in this data we don't have total seats
        //so for that fetch it from airplane table using airplane-repository
        //and then append into the req.body ie. data
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                //ie. if arrival time is less than departure time then
                throw {error:"Arrival time can't be less than departure time"}
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            //append the total seat in body data
            data={...data,totalSeats:airplane.capacity};
            const flight=await this.flightRepository.createFlight(data);
            return flight;
            
        }catch(err){
            console.log("error happened at flight service layer");
            throw {err};
        }
    }

    async getAllFlights(data){
        try{
            const flights=await this.flightRepository.getAllFlight(data);
            return flights;
        }catch(err){
            console.log("error happened at flight service layer");
            throw {err};
        }
    }

    async getFlight(flightId){
        try{
            const flight=await this.flightRepository.getFlight(flightId);
            return flight;
        }catch(err){
            console.log("error happened at flight service layer");
            throw {err};
        }
    }

    async updateFlight(flightId,data){
        try{
            const result=await this.flightRepository.updateFlight(flightId,data);
            return result;
        }catch(err){
            console.log("error happened at flight service layer");
            throw {err};
        }
    }
}


module.exports=FlightService