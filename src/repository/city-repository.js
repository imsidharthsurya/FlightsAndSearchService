const {City}=require("../models/index")
const {Op}=require("sequelize")

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

    async getAllCities(filter){
        //here filter will be null or object containing name
        try{

            //ie. if name query exist
            //then fetch city with those names
            //else fetch all the cities
            if(filter.name){//search city starting with this name
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.like]:`${filter.name}%`
                        }
                    }
                })

                return cities;
            }

            const cities=await City.findAll();
            return cities;
        }catch(err){
            console.log("error happened at repository level");
            throw{err};
        }
    }

    async createMultipleCities(data){
        //here data will be array of object
        try{
            const cities=await City.bulkCreate(data);
            return cities;
        }catch(err){
            console.log("error happened at repository level");
            throw {err};
        }
    }
}

module.exports=CityRepository