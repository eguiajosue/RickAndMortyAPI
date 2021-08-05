export const drawCharacter = (char) => {

  return `
    <div class="character-card">
      <h3 class="character-name">${char.name}</h3>
      <img class="character-img" src="${char.image}">
      <div class="character-info">
          <span class="character-data">${char.species}</span>
          <span class="character-data">${char.status}</span>
          <span class="character-data">${char.gender}</span>
          <span class="character-data">${char.origin.name}</span>
      </div>
    </div>
    `;
};
