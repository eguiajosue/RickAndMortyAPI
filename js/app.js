import { drawCharacter } from "./character.js";

const characterContainer = document.querySelector(".container");

fetch("https://rickandmortyapi.com/api/character/?page=1")
  .then((res) => res.json())
  .then((data) => {
    characterContainer.innerHTML = data.results.map((char) => drawCharacter(char)).join("");
  });