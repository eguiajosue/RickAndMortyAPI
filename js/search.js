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
