'use strict'

const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const pokedex = [{
        id: 1,
        number: '001',
        name: 'Bulbasaur',
        category: 'Seed',
        height: `2' 04"`,
        weigth: '15.2lbs',
        description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        type: 'Grass/Poison',
        abilities: 'Overgrow',
        png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png`,
        gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif`,
    },
    {
        id: 2,
        number: '002',
        name: 'Ivysaur',
        category: 'Seed',
        height: `3' 03"`,
        weigth: '28.7lbs',
        description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
        type: 'Grass/Poison',
        abilities: 'Overgrow',
        png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png`,
        gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur}.gif`,
    }, {
        id: 3,
        number: '003',
        name: 'Venusaur',
        category: 'Seed',
        height: `6' 07"`,
        weigth: '220.5lbs',
        description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
        type: 'Grass/Poison',
        abilities: 'Overgrow',
        png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png`,
        gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif`,
    }
];

for (let pokemon of pokedex) {

    pokemon.png = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.number}.png`;
    pokemon.gif = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`;

}

// 🚨📌📌📌 ----- ROTAS -----

app.get('/', (req, res) => {
    res.render('index', { pokedex });
});

app.get('/register', (req, res) => {
    res.render('register', { pokedex });
});

app.get('/details/:id', (req, res) => {
    const index = req.params.id;
    const pokemonById = pokedex[index - 1];
    res.render('details', { pokedex, chosenPokemon: pokemonById });
});

app.post('/add', (req, res) => {
    const addedPokemon = req.body;

    addedPokemon.id = Number(addedPokemon.number);

    console.log(addedPokemon); // FIXME:
    addedPokemon.png = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addedPokemon.number}.png`;
    addedPokemon.gif = `https://img.pokemondb.net/sprites/black-white/anim/normal/${addedPokemon.name.toLowerCase()}.gif`;


    pokedex.push(addedPokemon);

    console.log(pokedex); // FIXME:
    res.redirect('/');

});



app.listen(port, () => console.log(`Server running at http://localhost:${port}`));