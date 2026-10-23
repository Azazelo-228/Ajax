const username = document.querySelector(".username"),
  usName = document.querySelector(".name"),
  phone = document.querySelector(".phone"),
  company = document.querySelector(".company"),
  website = document.querySelector(".website"),
  email = document.querySelector(".email");
const id = window.location.href.split("?/")[1];

let api = "https://jsonplaceholder.typicode.com/users/";

fetch(api + id)
  .then((response) => response.json())
  .then((user) => {
    usName.innerHTML = user.name;
    username.innerHTML = user.username;
    phone.innerHTML = user.phone;
    company.innerHTML = user.company.name;
    website.innerHTML = user.website;
    email.innerHTML = user.email;
  });



  