const {Airplane}=require("../models/index")

class AirplaneRepository{

    async getAirplane(airplaneId){
        try{
            
            const airplane=await Airplane.findByPk(airplaneId);
            // console.log(airplane)
            return airplane;
        }catch(err){
            console.log("error happened at repository level");    
            throw{err}
        }
    }
}

module.exports=AirplaneRepository