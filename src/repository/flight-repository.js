const {Flight}=require("../models/index")
const {Op}=require("sequelize")

class FlightRepository{

    #createFilter(data){
        let filter={};
        if(data.arrivalAiportId){
            filter.arrivalAiportId=data.arrivalAiportId
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId
        }
        //both given then apply and filter
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter,{
        //         [Op.and]:[
        //             {price:{[Op.gte]:data.minPrice}},
        //             {price:{[Op.lte]:data.maxPrice}}
        //         ]
        //     })
        // }
        let priceFilter=[];
        if(data.minPrice){
            priceFilter.push({price:{[Op.gte]:data.minPrice}});
        }
        if(data.maxPrice){
            priceFilter.push({price:{[Op.lte]:data.maxPrice}});
        }
        Object.assign(filter,{[Op.and]:priceFilter})

        return filter;
    }
    
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

    async getFlight(flightId){
        try{
            const flight=await Flight.findByPk(flightId);
            return flight;
        }catch(err){
            console.log("error happened at flight repository level");    
            throw{err}
        }
    }

    async getAllFlight(filter){
        try{
            const filterObject=this.#createFilter(filter)
            const flights=await Flight.findAll({
                where:filterObject
            });
            return flights;
        }catch(err){
            console.log("error happened at flight repository level");    
            throw{err}
        }
    }

    async updateFlight(flightId,data){
        try{
            await Flight.update(data,{
                where:{
                    id:flightId
                }
            })
            return true;
            
        }catch(err){
            console.log("error happened at flight repository level");    
            throw{err}
        }
    }
}

module.exports=FlightRepository