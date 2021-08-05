import { drawCharacter } from "./character.js";

const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
});

characterContainer = document.querySelector(".container");
btnSearch = document.querySelector(".search-btn");
searchInput = document.querySelector(".search-input");

btnSearch.addEventListener("click", (e) => {
  fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput.value}`)
    .then((res) => res.json())
    .then((data) => {
      characterContainer.innerHTML = data.results.map((char) => drawCharacter(char)).join("");
    });
});
