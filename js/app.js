// Print default characters
fetch(`https://rickandmortyapi.com/api/character/?page=1`)
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
