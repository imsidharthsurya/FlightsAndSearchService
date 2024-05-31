const {CityService}=require("../services/index")

const cityService=new CityService(); //object of CityService type
//object created so that we can use it's methods

//method->Post
//and city data will be getting from req.body
const create=async(req,res)=>{

    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"Successfully created a city",
            err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:err
        })
    }
}

//method-> delete
//and city id will be getting from req.params.id
//since url: /city/:id
const destroy=async(req,res)=>{

    try{
        const response=await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"City deleted successfully",
            err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to delete city",
            err:err
        })
    }
}

//method-> get
//and city id will be getting from req.params.id
//since url: /city/:id
const get=async(req,res)=>{

    try{
        const city=await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:city,
            success:true,
            message:"city details fetched successfully",
            err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to get the city details",
            err:err
        })
    }
}

//method-> Patch
//body will be getting from req.body &
//cityid from req.params.id 
//url /city/:id
const update=async(req,res)=>{

    try{
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:city,
            success:true,
            message:"updated the city",
            err:{}
        })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Unable to update the city",
            err:err
        })
    }
}

const getAll=async(req,res)=>{
    try{
        const cities=await cityService.getAllCities();
        return res.status(200).json({
            data:cities,
            success:true,
            message:"Cities fetched successfully",
            err:{}
        })
    }catch(err){
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the cities",
            err:err
        })
    }
}

module.exports={
    create,
    destroy,
    update,
    get,
    getAll
}