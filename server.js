const express = require("express");
const axios = require("axios");
const { getAllHotels, getHotelById } = require("./Controller/Hotel");
const { getAvailableCities, getCity } = require("./Controller/City");
const dotenv = require('dotenv')
dotenv.config()
const {
  suggestPlaces,
  suggestTrip,
  suggestTripDemo,
} = require("./Controller/Ai");
const cors = require("cors");
const { getTravelRoutes } = require("./Controller/TravelExp");
const app = express();

app.use(express.json());
app.use(cors());
require("./Config/db");
require("./Models/PlacesToVisit/Events");

//hotels routes
app.get("/hotels", getAllHotels);
app.get("/hotel/:id", getHotelById);

//cities routes
app.get("/cities", getAvailableCities);
app.post("/city", getCity);

//ai routes
app.post("/suggestPlaces", suggestPlaces);
app.post("/suggestTrip", suggestTrip);
app.post("/suggestTrips", suggestTripDemo);

// travel routes
app.post("/travel", getTravelRoutes);
// app.post("/travelPlan", getBestTravel);
console.log(process.env.PORT);
port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server running on port :",port);
});
