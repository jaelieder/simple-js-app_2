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
  
  for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = pokemonList[i];
    let name = pokemon.name;
    let height = pokemon.height;
    let output = name + " (height: " + height + ")";

    // Check if the height is above a certain value
    if (height > 5) {
      output += " - Wow, that's big!";
    }
  
    document.write(output + "<br>");
  }
  