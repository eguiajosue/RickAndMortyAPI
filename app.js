const element = document.querySelector("form");
element.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submission cancelled.");
});

characterContainer = document.querySelector(".container");
btnSearch = document.querySelector(".search-btn");
searchInput = document.querySelector(".search-input");

btnSearch.addEventListener("click", (e) => {
  fetch(`https://rickandmortyapi.com/api/character/?name=${searchInput.value}`)
    .then((res) => res.json())
    .then((data) => {
      characterContainer.innerHTML = data.results.map(
        (char) => `

          <div class="character-card">
            <h3 class="character-name">${char.name}</h3>
            <img class="character-img" src="${char.image}">
            <span class="character-data">${char.species}</span>
            <span class="character-data">${char.status}</span>
            <span class="character-data">${char.origin.name}</span>
          </div>
          
        `
      );
    });
});

// Print default characters
fetch(`https://rickandmortyapi.com/api/character/?page=1`)
  .then((res) => res.json())
  .then((data) => {
    characterContainer.innerHTML = data.results.map(
      (char) => `

      <div class="character-card">
        <h3 class="character-name">${char.name}</h3>
        <img class="character-img" src="${char.image}">
        <span class="character-data">${char.species}</span>
        <span class="character-data">${char.status}</span>
        <span class="character-data">${char.origin.name}</span
      </div>
      
      `
    );
  });

//! Navigation Code
let page = 1;
const prevPage = document.querySelector(".n-prev");
const fowardPage = document.querySelector(".n-foward");
// Previous page
prevPage.addEventListener("click", (e) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${--page}`)
    .then((res) => res.json())
    .then((data) => {
      characterContainer.innerHTML = data.results.map(
        (char) => `

        <div class="character-card">
            <h3 class="character-name">${char.name}</h3>
            <img class="character-img" src="${char.image}">
            <span class="character-data">${char.species}</span>
            <span class="character-data">${char.status}</span>
            <span class="character-data">${char.origin.name}</span
        </div>
        
      `
      );
    });
});

// Next page
fowardPage.addEventListener("click", (e) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${++page}`)
    .then((res) => res.json())
    .then((data) => {
      characterContainer.innerHTML = data.results.map(
        (char) => `

        <div class="character-card">
            <h3 class="character-name">${char.name}</h3>
            <img class="character-img" src="${char.image}">
            <span class="character-data">${char.species}</span>
            <span class="character-data">${char.status}</span>
            <span class="character-data">${char.origin.name}</span
        </div>
        
      `
      );
    });
});
