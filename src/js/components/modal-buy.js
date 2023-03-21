document.addEventListener("DOMContentLoaded", function () {
    const clickBuy = document.getElementById("click-buy");
    const modalBuy = document.getElementById("modal-buy");
    const closeBuy = document.querySelector(".close__btn");
    if (window.location.pathname === "/card-product.html") {
      clickBuy.addEventListener("click", () => {
        modalBuy.classList.add("open");
      });
      closeBuy.addEventListener("click", () => {
        modalBuy.classList.remove("open");
      });
    }
});
