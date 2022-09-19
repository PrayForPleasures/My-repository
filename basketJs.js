"use strict";
window.addEventListener("DOMContentLoaded", function () {
  const basket = document.querySelector(".recPos");
  const addBtn = document.querySelectorAll(".add_box");
  const products = document.querySelectorAll(".item5");

  function createCart() {
    let cart = document.createElement("div");
    let field = document.createElement("div");
    let priceField = document.createElement("div");
    let total = document.createElement("div");
    let head = document.createElement("h2");
    let closeBtn = document.createElement("button");

    head.textContent = "In your basket:";
    closeBtn.textContent = "Close";

    basket.appendChild(cart);
    cart.appendChild(head);
    cart.appendChild(field);
    cart.appendChild(total);
    cart.appendChild(priceField);
    cart.appendChild(closeBtn);

    cart.style.maxWidth = "700px";
    cart.style.height = "auto";
    cart.style.border = "2px solid #222222";
    cart.style.borderRadius = "3px";
    cart.style.display = "flex";
    cart.style.flexDirection = "column";
    cart.style.alignItems = "center";
    cart.style.backgroundColor = "whitesmoke";
    cart.style.padding = "2%";
    cart.style.zIndex = "5";
    cart.style.position = "absolute";
    cart.style.right = "21%";
    cart.classList.add("cartStyle");

    field.classList.add("mainField");
    field.style.minHeight = "100px";
    field.style.display = "flex";
    field.style.flexWrap = "wrap";

    priceField.style.minHeight = "30px";
    priceField.style.minWidth = "100px";
    priceField.style.border = "2px solid #222222";
    priceField.style.borderRadius = "3px";
    priceField.style.color = "#222222";
    priceField.style.padding = "2%";
    priceField.classList.add("price_Field");

    total.style.minHeight = "30px";
    total.style.minWidth = "100px";
    total.style.border = "2px solid #222222";
    total.style.borderRadius = "3px";
    total.style.color = "#222222";
    total.style.padding = "2%";
    total.style.marginBottom = "3%";
    total.classList.add("total_Items");

    head.style.fontSize = "24px";
    head.style.color = "#222222";
    head.style.marginTop = "3%";
    head.style.marginBottom = "3%";
    head.style.fontWeight = "bold";

    closeBtn.style.marginTop = "3%";
    closeBtn.style.marginBottom = "3%";
    closeBtn.style.width = "100px";
    closeBtn.style.padding = "3%";
    closeBtn.style.fontWeight = "bold";
    closeBtn.style.borderRadius = "3px";
    closeBtn.classList.add("closeBtnStyle");

    cart.style.display = "none";
  }
  createCart();

  let field = document.querySelector(".mainField");
  let cart = document.querySelector(".cartStyle");
  let totalItems = document.querySelector(".total_Items");
  let closeBtn = document.querySelector(".closeBtnStyle");

  function openBasket() {
    cart.style.display = "flex";
  }
  function closeBasket() {
    cart.style.display = "none";
  }

  basket.addEventListener("click", function (event) {
    event.preventDefault();
    openBasket();
  });

  closeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    closeBasket();
  });

  let price = document.querySelectorAll(".price_basket");
  let pField = document.querySelector(".price_Field");
  let sum = 0;
  let count = 1;
  totalItems.textContent = "Total u wanna buy: 0";
  pField.textContent = " Total Price: 0 $";

  let numBasket = document.createElement("div");
  numBasket.style.width = "24px";
  numBasket.style.height = "24px";
  numBasket.style.backgroundColor = "#ff6a6a";
  numBasket.style.border = "1px solid #222222";
  numBasket.style.position = "absolute";
  numBasket.style.zIndex = "7";
  numBasket.style.color = "#222222";
  numBasket.style.textAlign = "center";
  numBasket.style.borderRadius = "50%";

  for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", function () {
      let item = products[i].cloneNode(true);
      let btn = item.querySelector(".add_box");
      btn.remove();
      let par = item.querySelector(".item_description");
      par.remove();
      field.appendChild(item);

      if (field.contains(item)) {
        let priceNum = +price[i].innerHTML;
        sum = sum + priceNum;
        pField.textContent = "Total Price: " + sum + "$";
        totalItems.textContent = "Total u wanna buy: " + count++;
        basket.appendChild(numBasket);
        numBasket.textContent = count - 1;
      }
    });
  }
});
