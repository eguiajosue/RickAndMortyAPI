import { drawCharacter } from "./character.js";

//! Navigation Code
let page = 1;
const characterContainer = document.querySelector(".container");
const prevPage = document.querySelector(".n-prev");
const fowardPage = document.querySelector(".n-foward");

// Previous page
prevPage.addEventListener("click", (e) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${--page}`)
    .then((res) => res.json())
    .then((data) => {
      characterContainer.innerHTML = data.results.map((char) => drawCharacter(char)).join("");
    });
});

// Next page
fowardPage.addEventListener("click", (e) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${++page}`)
    .then((res) => res.json())
    .then((data) => {
      characterContainer.innerHTML = data.results.map((char) => drawCharacter(char)).join("");
    });
});
