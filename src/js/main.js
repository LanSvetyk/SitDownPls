const btns = document.getElementsByTagName("button");
let listBtns = Array.from(btns);
listBtns.forEach((btn) => {
  btn.setAttribute("buttonrole", "button");
});

if (
  window.location.toString().indexOf("index.html") > 0 ||
  window.location.toString().indexOf("catalog.html") < 0 &&
  window.location.toString().indexOf("card-product.html") < 0 &&
  window.location.toString().indexOf("localhost") > 0 ||
  window.location.href == "https://lansvetyk.github.io/SitDownPls_prod/"
) {
const ratingBtn = document.querySelector(".rating__btn");
const ratingItems = document.querySelectorAll(".rating__item");
ratingBtn.addEventListener("click", () => {
  ratingItems.forEach((elem) => {
    elem.style.display = 'flex';
    ratingBtn.setAttribute("disabled", true);
  });
});
}
