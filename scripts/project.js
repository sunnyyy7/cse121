function searchPokemon() {
    const inputElement = document.getElementById("pokemonInput");
    const pokemonName = inputElement.value.toLowerCase();
 
    // Fetch Pokemon data from the API
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            displayPokemonDetails(data);
        })
        .catch(error => {
            console.error("Error fetching Pokemon data:", error);
            alert("Pokemon not found. Please enter a valid Pokemon name.");
        });
}
 
function displayPokemonDetails(pokemonData) {
    const pokemonDetailsElement = document.getElementById("pokemonDetails");
 
    // Clear previous details
    pokemonDetailsElement.innerHTML = "";
 
    // Create and append Pokemon details to the container

    const pokemonImage = document.createElement("img");
    pokemonImage.src = pokemonData.sprites.front_default || 'placeholder-image-url';
    pokemonImage.alt = pokemonData.name;

    const pokemonName = document.createElement("h2");
    pokemonName.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);

    const pokemonAbilities = document.createElement("p");
    pokemonAbilities.textContent = `Abilities: ${pokemonData.abilities.map(ability => ability.ability.name).join(", ")}`;

    const pokemonType = document.createElement("p");
    pokemonType.textContent = `Type: ${pokemonData.types.map(type => type.type.name).join(", ")}`;

    const pokemonStats = document.createElement("p");
    pokemonStats.textContent = `Stats: ${pokemonData.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(", ")}`;

    const pokemonHeight = document.createElement("p");
    pokemonHeight.textContent = `Height: ${pokemonData.height / 10} m`;

    const pokemonWeight = document.createElement("p");
    pokemonWeight.textContent = `Weight: ${pokemonData.weight / 10} kg`;


    pokemonDetailsElement.appendChild(pokemonImage);
    pokemonDetailsElement.appendChild(pokemonName);
    pokemonDetailsElement.appendChild(pokemonAbilities);
    pokemonDetailsElement.appendChild(pokemonType);
    pokemonDetailsElement.appendChild(pokemonStats);
    pokemonDetailsElement.appendChild(pokemonHeight);
    pokemonDetailsElement.appendChild(pokemonWeight);
}