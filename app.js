const hotels = [

  {
    _id:1,

    name:"Taj Palace",

    location:"Hyderabad",

    price:5000,

    availableRooms:10,

    image:
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop"
  },

  {
    _id:2,

    name:"Royal Grand",

    location:"Mumbai",

    price:7000,

    availableRooms:5,

    image:
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop"
  },

  {
    _id:3,

    name:"Ocean View Resort",

    location:"Goa",

    price:9000,

    availableRooms:8,

    image:
    "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1200&auto=format&fit=crop"
  }

];

let output = "";

hotels.forEach((hotel)=>{

  output += `

  <div class="card">

    <img src="${hotel.image}">

    <div class="card-content">

      <h2>${hotel.name}</h2>

      <p>
        📍 ${hotel.location}
      </p>

      <p>
        🛏 Rooms:
        ${hotel.availableRooms}
      </p>

      <p>
        💰 ₹${hotel.price}/Night
      </p>

      <button onclick="bookHotel(${hotel._id})">
        Book Now
      </button>

    </div>

  </div>

  `;
});

document.getElementById("hotels")
.innerHTML = output;

function bookHotel(id){

  localStorage.setItem("hotelId", id);

  window.location = "booking.html";
}