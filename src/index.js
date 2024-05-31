const express=require("express");

const {PORT}=require("./config/serverConfig")
// const CityRepository=require("./repository/city-repository")
const apiRoutes=require("./routes/index")

// const {Airport,City}=require("./models/index")
const db=require("./models/index")
const {City,Airport}=require("./models/index")
const setupAndStartServer=async()=>{
    const app=express();
    // const PORT=3000;

    app.use(express.json())

    app.use("/api",apiRoutes);

    app.listen(PORT,async()=>{

        console.log(`server is running on port ${PORT}`);
        if(process.env.SYNC_DB){
            await db.sequelize.sync({alter:true})
        }
        
        // const city=await City.findOne({
        //     where:{
        //         id:14
        //     }
        // })
        // const airports=await city.getAirports();
        // await Airport.create({
        //     name:"Darbhanga Airport",
        //     cityId:4
        // })
        // console.log(airports)
    })
}

setupAndStartServer();