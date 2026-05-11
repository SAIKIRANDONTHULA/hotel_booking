const mongoose = require("mongoose");

const bookingSchema =
new mongoose.Schema({

  hotelId:String,

  checkIn:String,

  checkOut:String,

  guests:Number

});

module.exports =
mongoose.model("Booking", bookingSchema);