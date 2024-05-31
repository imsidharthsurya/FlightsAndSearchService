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
            const city1=await City.findByPk(cityId);
            return city1;
        }catch(err){
            console.log("error happened at repository level");
            throw{err}
            // return "not found error happened"
        }
        
    }

    async updateCity(cityId,data){
        try{
            // const city=await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // })
            // return city;

            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        }catch(err){
            console.log("error happened at repository level");
            throw {err}
        }
    }
}

module.exports=CityRepository