const express =
require("express");

const mongoose =
require("mongoose");

const cors =
require("cors");

const dotenv =
require("dotenv");

const connectDB =
require("./config/db");

/* CONFIG */

dotenv.config();

/* DATABASE */

connectDB();

/* APP */

const app = express();

/* MIDDLEWARE */

app.use(cors());

app.use(express.json());

/* ROUTES */

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/hotels",
  require("./routes/hotelRoutes")
);

app.use(
  "/api/bookings",
  require("./routes/bookingRoutes")
);

/* HOME */

app.get("/",(req,res)=>{

  res.send(
    "Hotel Booking Backend Running"
  );

});

/* PORT */

const PORT =
process.env.PORT || 5000;

app.listen(PORT,()=>{

  console.log(
    `Server Running On Port ${PORT}`
  );

});