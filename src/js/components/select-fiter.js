if (window.location.pathname === "/catalog.html") {
  const selectCategoria = document.getElementById("categoria");
  const selectPrice = document.getElementById("price");
  const selectSale = document.getElementById("sale");
  const selectColor = document.getElementById("color");
  const listSelect = document.querySelectorAll(".list__select-css");
  const arrowSelectCategoria = selectCategoria.firstElementChild;
  const arrowSelectPrice = selectPrice.firstElementChild;
  const arrowSelectSale = selectSale.firstElementChild;
  const arrowSelectColor = selectColor.firstElementChild;
  const catalogFilters = document.querySelectorAll(".list__checkboxes");
  const filtersCheckboxes = document.querySelectorAll(".filters__checkboxes");
  // select categoria
  function checkboxesOpenCat() {
    const checkCat = document.getElementById("check-categoria");
    if (checkCat.classList.contains("list__checkboxes-close")) {
      checkCat.classList.remove("list__checkboxes-close");
      arrowSelectCategoria.classList.add("arrow-app");
    } else if (!checkCat.classList.contains("list__checkboxes-close")) {
      checkCat.classList.add("list__checkboxes-close");
      arrowSelectCategoria.classList.remove("arrow-app");
    }
  }
  if (document.documentElement.clientWidth < 1190) {
    selectCategoria.addEventListener("click", () => {
      checkboxesOpenCat();
    });
  }

  // select price
  const checkPrice = document.getElementById("check-price");
  function checkboxesOpenPrice() {
    if (checkPrice.classList.contains("list__checkboxes-close")) {
      checkPrice.classList.remove("list__checkboxes-close");
      arrowSelectPrice.classList.add("arrow-app");
    } else if (!checkPrice.classList.contains("list__checkboxes-close")) {
      checkPrice.classList.add("list__checkboxes-close");
      arrowSelectPrice.classList.remove("arrow-app");
    }
  }
  if (document.documentElement.clientWidth < 1190) {
    selectPrice.addEventListener("click", () => {
      checkboxesOpenPrice();
    });
  }

  // select sale
  const checkSale = document.getElementById("check-sale");
  function checkboxesOpenSale() {
    if (checkSale.classList.contains("list__checkboxes-close")) {
      checkSale.classList.remove("list__checkboxes-close");
      arrowSelectSale.classList.add("arrow-app");
    } else if (!checkSale.classList.contains("list__checkboxes-close")) {
      checkSale.classList.add("list__checkboxes-close");
      arrowSelectSale.classList.remove("arrow-app");
    }
  }
  if (document.documentElement.clientWidth < 1190) {
    selectSale.addEventListener("click", () => {
      checkboxesOpenSale();
    });
  }

  // select color
  const checkColor = document.getElementById("check-color");
  function checkboxesOpenColor() {
    if (checkColor.classList.contains("list__checkboxes-close")) {
      checkColor.classList.remove("list__checkboxes-close");
      arrowSelectColor.classList.add("arrow-app");
    } else if (!checkColor.classList.contains("list__checkboxes-close")) {
      checkColor.classList.add("list__checkboxes-close");
      arrowSelectColor.classList.remove("arrow-app");
    }
  }
  if (document.documentElement.clientWidth < 1190) {
    selectColor.addEventListener("click", () => {
      checkboxesOpenColor();
    });
  }

  const filtersTitle = document.querySelector(".filters__title");
  if (document.documentElement.clientWidth < 1190) {
    filtersTitle.textContent = "Фильтры:";
  } else if (document.documentElement.clientWidth > 1190) {
    filtersTitle.textContent = "Фильтровать по:";
  }

  window.addEventListener(
    "resize",
    function (event) {
      if (document.documentElement.clientWidth < 1190) {
        filtersTitle.textContent = "Фильтры:";
      } else if (document.documentElement.clientWidth > 1190) {
        filtersTitle.textContent = "Фильтровать по:";
      }
    },
    true
  );
}
