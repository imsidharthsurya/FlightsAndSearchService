const {CityRepository}=require("../repository/index")

class CityService{
    constructor(){
        //creating object of city repository type
        this.cityRepository=new CityRepository();
    }

    async createCity(data){
        try{
            const city=await this.cityRepository.createCity(data);
            return city;

        }catch(err){
            console.log("error happened at service layer");
            throw {err};
        }
    }

    async deleteCity(cityId){
        try{
            const response=await this.cityRepository.deleteCity(cityId);
            return response;
        }catch(err){
            console.log("error happened at service layer");
            throw {err};
        }
    }

    async getCity(cityId){
        try{
            const city=await this.cityRepository.getCity(cityId);
            return city;
        }catch(err){
            console.log("error happened at service layer");
            throw {err};
        }
    }

    async updateCity(cityId,data){
        try{
            const city=await this.cityRepository.updateCity(cityId,data);
            return city;
        }catch(err){
            console.log("error happened at service layer");
            throw {err};
        }
    }

    async getAllCities(filter){
        //here filter will be query objects containing all query parameters
        try{

            const cities=this.cityRepository.getAllCities({name:filter.name});
            return cities;
        }catch(err){
            console.log("error happened at service level");
            throw {err};
        }
    }

    async createMultipleCities(data){
        try{
            const cities=await this.cityRepository.createMultipleCities(data);
            return cities;
        }catch(err){
            console.log("error happened at service level");
            throw {err};
        }
    }

    async getAllAirports(cityId){
        try{
            const airports=await this.cityRepository.getAllAirports(cityId);
            return airports;
        }catch(err){
            console.log("error happenend at service level");
            throw {err};
        }
    }
}

module.exports=CityService