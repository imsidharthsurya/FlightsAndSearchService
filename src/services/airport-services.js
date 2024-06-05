const CrudServices=require("./crud-services");
const {AirportRepository}=require("../repository/index")
//we need to get the repository since CrudServices need repository
//on which it'll call those functions

class AirportServices extends CrudServices{
    constructor(){
        const airportRepository=new AirportRepository();
        super(airportRepository);
    }
}

module.exports=AirportServices