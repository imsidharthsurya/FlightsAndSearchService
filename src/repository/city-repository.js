const {City}=require("../models/index")

class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name})
            return city;
        }catch(err){
                console.log("error happened at repository level");    
            throw{err}
        }
    }

    async deleteCity(cityId){
        try{
            City.destroy({
                where:{
                    id:cityId
                }
            })
        }catch(err){
                console.log("error happened at repository level");        
            throw{err}
        }
    }

    async getCity(cityId){
        //we can use either findOne or findByPK
        try{
            const city=await City.findByPk(cityId);
            return city
        }catch(err){
                console.log("error happened at repository level");
            throw{err}
        }
        
    }

    async updateCity(cityId,data){
        try{
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            })
            return city;
        }catch(err){
            console.log("error happened at repository level");
            throw {err}
        }
    }
}

module.exports=CityRepository