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
            <div class="character-info">
                <span class="character-data">${char.species}</span>
                <span class="character-data">${char.status}</span>
                <span class="character-data">${char.origin.name}</span>
            </div>
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
            <div class="character-info">
                <span class="character-data">${char.species}</span>
                <span class="character-data">${char.status}</span>
                <span class="character-data">${char.origin.name}</span>
            </div>
        </div>
      `
      );
    });
});
