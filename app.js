characterContainer = document.querySelector('.container');

// Print default characters
fetch(`https://rickandmortyapi.com/api/character/?page=1`)
  .then((res) => res.json())
  .then((data) => {
      characterContainer.innerHTML = data.results.map(char => `
      <h3>${char.name}</h3>
      `);
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
        characterContainer.innerHTML = data.results.map(char => `
        <h3>${char.name}</h3>
      `);
    });
});

// Next page
fowardPage.addEventListener("click", (e) => {
  fetch(`https://rickandmortyapi.com/api/character/?page=${++page}`)
    .then((res) => res.json())
    .then((data) => {
        characterContainer.innerHTML = data.results.map(char => `
        <h3>${char.name}</h3>
      `);
    });
});

