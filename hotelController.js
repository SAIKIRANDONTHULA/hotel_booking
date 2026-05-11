const Hotel =
require("../models/Hotel");

/* GET HOTELS */

exports.getHotels =
async(req,res)=>{

  try{

    const hotels =
    await Hotel.find();

    res.json(hotels);

  }catch(error){

    res.status(500).json(error);

  }

};

/* ADD HOTEL */

exports.addHotel =
async(req,res)=>{

  try{

    const hotel =
    await Hotel.create(req.body);

    res.json({

      message:"Hotel Added",

      hotel

    });

  }catch(error){

    res.status(500).json(error);

  }

};