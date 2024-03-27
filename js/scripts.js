let pokemonRepository = (function() {

//pokemon array
let pokemonList=[
    {
    name: 'Squirtle',
    id: 7,
    height: 5,
    type: ['water']
    },
    {
    name: 'Spearow',
    id: 21,
    height: 3,
    type: ['flying','normal']
    },
    {
    name: 'Jigglypuff',
    id: 39,
    height: 5,
    type: ['fairy','normal']
    },
    {
    name: 'Psyduck',
    id: 54,  
    height: 8,
    type: ["water"]
    },
    {
    name: 'Pikachu',
    id: 25,
    height: 4,
    type: ['electric']
        }
  ];

  function addListItem(pokemon){
    let pokemonListElement = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('pokemon-button');
    listItem.appendChild(button);
    pokemonListElement.appendChild(listItem);
  }
  
  return {
    add: function(pokemon) {
      pokemonList.push(pokemon);
      addListItem(pokemon): addListItem
    },
    getAll: function() {
      return pokemonList;
    }
  };
})();

  pokemonRepository.getAll().forEach (function(pokemon) {
    //create a variable inside the forEach's loop function block, then assign it the ul element you just added to your “index.html” file.
    pokemonRepository.add(pokemon);
  });
