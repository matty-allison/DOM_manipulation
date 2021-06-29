let base_URL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let pokemon = data.results;

      let container = document.querySelector(".pokemon-list-container");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<img onclick="getPokemonInfo('${btn.url}')" src="pokeball.png"><p>${btn.name}</p>`;
      });
      let nextPrevious = document.querySelector(".previousnext");
      nextPrevious.innerHTML = ""
      nextPrevious.innerHTML += `<button class="previousbtn" onclick="getPokemonList('${data.previous}')">Previous</button>`;
      nextPrevious.innerHTML += `<button class="nextbtn" onclick="getPokemonList('${data.next}')">Next</button>`;
    });
}

getPokemonList(base_URL);

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".pokemon-info").innerHTML = `
    <img src="${data.sprites.front_default} "> <p class="info">${data.name}</p>
    `;
    });
}

// function getPokemonInfo(url) {
//   fetch(url)
//   .then(res => res.json())
//   .then((data) => {
//     console.log(data)
//     document.querySelector(".name").innerHTML = `<p class="info">${data.name}</p>`;
//   })
// }
