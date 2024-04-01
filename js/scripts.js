let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

//pokemon array
// let pokemonList=[
//     {
//     name: 'Squirtle',
//     id: 7,
//     height: 5,
//     type: ['water']
//     },
//     {
//     name: 'Spearow',
//     id: 21,
//     height: 3,
//     type: ['flying','normal']
//     },
//     {
//     name: 'Jigglypuff',
//     id: 39,
//     height: 5,
//     type: ['fairy','normal']
//     },
//     {
//     name: 'Psyduck',
//     id: 54,  
//     height: 8,
//     type: ["water"]
//     },
//     {
//     name: 'Pikachu',
//     id: 25,
//     height: 4,
//     type: ['electric']
//         }
//   ];

function add(pokemon) {
  if (
    typeof pokemon === "object" &&
    "name" in pokemon
  ) {
    pokemonList.push(pokemon);
  } else {
    console.log("pokemon is not correct");
  }
}
function getAll() {
  return pokemonList;
}  

function addListItem(pokemon){
    let pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    
    // Add event listener to the button
    button.addEventListener('click', function() {
      showDetails(pokemon);
    });
  
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function showDetails(pokemon) {
    console.log(pokemon.name);
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  
  // return {
    // add: function(pokemon) {
    //   pokemonList.push(pokemon);
    //   addListItem(pokemon);
    // },
    // getAll: function() {
    //   return pokemonList;
    // },
  return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
  };
    
})();

pokemonRepository.loadList().then(function () {  
  pokemonRepository.getAll().forEach (function(pokemon) {
    //create a variable inside the forEach's loop function block, then assign it the ul element you just added to your “index.html” file.
      pokemonRepository.addListItem(pokemon);
  });
});