import { drawCharacter } from "./character.js";

const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
});

const characterContainer = document.querySelector(".container");
const btnSearch = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

btnSearch.addEventListener("click", (e) => {
  fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput.value}`)
    .then((res) => res.json())
    .then((data) => {
      characterContainer.innerHTML = data.results.map((char) => drawCharacter(char)).join("");
    });
    document.querySelector('audio').play();
});

