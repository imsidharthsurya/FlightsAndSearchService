const express=require("express");

const CityController=require("../../controllers/city-controller")
const FlightController=require("../../controllers/flight-controller");
const AirportController=require("../../controllers/airport-controller")

//middlewares
const {flightMiddlewares}=require("../../middlewares/index")

const router=express.Router();

router.post("/city",CityController.create);

router.delete("/city/:id",CityController.destroy);

router.get("/city/:id",CityController.get);

router.patch("/city/:id",CityController.update);

router.get("/city",CityController.getAll);

router.post("/cities",CityController.createMultiple);

router.get("/city/airport/:id",CityController.getAllAirports);


//flight crud endpoints

router.post("/flights",flightMiddlewares.validateCreateFlight,FlightController.createFlight);
router.get("/flights",FlightController.getAllFlight);
router.get("/flight/:id",FlightController.getFlight);

//airport crud endpoints
router.post("/airport",AirportController.create);

module.exports=router

