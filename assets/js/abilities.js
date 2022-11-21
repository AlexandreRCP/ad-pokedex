const pokemonListAbilities = document.getElementById('pokemonListAbilities');

const maxRecords = 151;
const limit = 1;
let offset = 0;

function convertPokemonToLiAbilities(pokemon) {
    return `
        <div class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <div class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                <div>
                <img class="abilityImg" src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <div class="abilityDetails">
                <ol class="abilities">
                    ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                </ol>
            </div>
        </div>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLiAbilities).join('');
        pokemonListAbilities.innerHTML += newHtml;
    })
}

loadPokemonItens(offset, limit);

console.log('Teste');