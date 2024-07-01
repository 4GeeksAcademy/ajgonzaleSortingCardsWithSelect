/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

function createCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let suit = suits[Math.floor(Math.random() * suits.length)];
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  let color = "";
  if (suits.indexOf(suit) < 3) color = "text-danger";

  let html = `<div class="col-12 text-start spade ${color}">
            ${suit}
          </div><div class="col-12 number text-center ${color}">
            ${number}
          </div><div class="col-12 text-end spade backwards ${color}">
            ${suit}
          </div>`;

  let div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = html;
  let cards = document.querySelector(".cards");
  cards.appendChild(div);
}
window.createCards = function createCards() {
  let number = document.querySelector("#numberCard");

  for (let i = 0; i < number.value; i++) {
    createCard();
  }
};
