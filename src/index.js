const express=require("express");

const {PORT}=require("./config/serverConfig")
const CityRepository=require("./repository/city-repository")

const setupAndStartServer=async()=>{
    const app=express();
    // const PORT=3000;

    app.use(express.json())

    app.listen(PORT,async()=>{

        console.log(`server is running on port ${PORT}`);
        const city=new CityRepository();
        // city.createCity({name:"New Delhi"})
        // city.deleteCity(3)
        // city.updateCity(3,{name:"Sidharth nagar"});
        // city.getCity(3)

    })
}

setupAndStartServer();