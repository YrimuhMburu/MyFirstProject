let li = document.querySelector("li");
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getday()];
let hours = now.getHours();
let minutes = now.getMinutes();
li.innerHTML = "${day} ${hours} ${minutes}";
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let h1 = document.querySelector("h1");
  h1.innerHTML = "${searchInput}";
}
let form =document.querySelector(#search-form);
form.addEventListener("submit" search);