document
.getElementById("bookingForm")
.addEventListener("submit",(e)=>{

  e.preventDefault();

  alert(
    "Hotel Booked Successfully 🎉"
  );

  window.location = "hotels.html";
});