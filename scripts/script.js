const btns = document.querySelectorAll(".button");


btns.forEach((button) => {
  button.addEventListener("click", function () {
    let id = button.dataset.user;
    console.log(id);
    window.location.href = `profile.html?/${id}`;
  });
});
