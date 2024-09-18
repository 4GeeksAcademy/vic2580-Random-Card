/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let btn = document.querySelector(".btn");

window.onload = function() {
  btn.addEventListener("click", function() {
    generateCard();
  });
};

const generateCard = () => {
  let title = document.querySelector(".card-title");
  let suit = ["♥", "♦", "♣", "♠"];
  let rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  let randomSuit = suit[Math.floor(Math.random() * suit.length)];
  let randomRank = rank[Math.floor(Math.random() * rank.length)];

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.querySelector(".topSuit").style.color = "red";
    document.querySelector(".rank").style.color = "red";
    document.querySelector(".bottomSuit").style.color = "red";
  } else {
    document.querySelector(".topSuit").style.color = "black";
    document.querySelector(".rank").style.color = "black";
    document.querySelector(".bottomSuit").style.color = "black";
  }
  document.querySelector(".topSuit").innerHTML = randomSuit;
  document.querySelector(".rank").innerHTML = randomRank;
  document.querySelector(".bottomSuit").innerHTML = randomSuit;
};
