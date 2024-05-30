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
}

module.exports=CityService