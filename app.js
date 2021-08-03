search = document.querySelector('.input-id');
button = document.querySelector('.btn-search');
characterContainer = document.querySelector('.container');



function takeCharacters () {
    fetch('https://rickandmortyapi.com/api/character/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

takeCharacters();