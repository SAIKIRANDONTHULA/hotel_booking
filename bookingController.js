const Booking =
require("../models/Booking");

exports.createBooking =
async(req,res)=>{

  try{

    const booking =
    await Booking.create(req.body);

    res.json({

      message:
      "Booking Successful",

      booking

    });

  }catch(error){

    res.status(500).json(error);

  }

};