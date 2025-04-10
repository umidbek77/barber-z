document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const phone = e.target.phone.value;
  const date = e.target.date.value;

  const booking = { name, phone, date };

  // 🔒 Mahalliy saqlash (localStorage)
  let bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Navbatga yozildingiz! Rahmat.");
  e.target.reset();
});
