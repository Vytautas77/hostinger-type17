const mainBtn = document.getElementById("mainBtn");
const mobileNavBar = document.querySelector(".mobileNavBar");

mainBtn.addEventListener("click", () => {
  mobileNavBar.classList.toggle("active");
});
