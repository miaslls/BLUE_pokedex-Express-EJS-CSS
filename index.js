'use strict'

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

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
    }
];

for (let pokemon of pokedex) {
    pokemon.bg_img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.number}.png`;
    pokemon.img = `https://img.pokemondb.net/sprites/black-white/anim/normal/${pokemon.name.toLowerCase()}.gif`;
}


// 🚨📌📌📌 ----- ROTAS -----

app.get('/', (req, res) => {
    res.render('index', { pokedex });
});

app.get('/details', (req, res) => {
    res.render('details', { pokedex });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));