"use strict";

const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pokedex = [
  {
    id: 1,
    number: "001",
    name: "Bulbasaur",
    category: "Seed",
    height: `2' 04"`,
    weigth: "15.2lbs",
    description:
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    type: "Grass/Poison",
    abilities: "Overgrow",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif`,
  },
  {
    id: 2,
    number: "002",
    name: "Ivysaur",
    category: "Seed",
    height: `3' 03"`,
    weigth: "28.7lbs",
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    type: "Grass/Poison",
    abilities: "Overgrow",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/ivysaur.gif`,
  },
  {
    id: 3,
    number: "003",
    name: "Venusaur",
    category: "Seed",
    height: `6' 07"`,
    weigth: "220.5lbs",
    description:
      "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    type: "Grass/Poison",
    abilities: "Overgrow",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur.gif`,
  },
  {
    id: 4,
    number: "004",
    name: "charmander",
    category: "Lizard",
    height: `2' 00"`,
    weigth: "18.7lbs",
    description:
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    type: "Fire",
    abilities: "Blaze",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/charmander.gif`,
  },
  {
    id: 5,
    number: "005",
    name: "charmeleon",
    category: "flame",
    height: `3' 07"`,
    weigth: "41.9lbs",
    description:
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
    type: "Fire",
    abilities: "Blaze",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/Charmeleon.gif`,
  },
  {
    id: 6,
    number: "006",
    name: "charizard",
    category: "flame",
    height: `5' 07"`,
    weigth: "199.5lbs",
    description:
      "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    type: "Fire",
    abilities: "blaze",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif`,
  },
  {
    id: 7,
    number: "007",
    name: "squirtle",
    category: "tiny turtle",
    height: `1' 08"`,
    weigth: "19.8lbs",
    description:
      "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    type: "water",
    abilities: "torrent",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif`,
  },
  {
    id: 8,
    number: "008",
    name: "wartortle",
    category: "turtle",
    height: `3' 03"`,
    weigth: "49.6lbs",
    description:
      "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    type: "water",
    abilities: "torrent",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/wartortle.gif`,
  },
  {
    id: 9,
    number: "009",
    name: "blastoise",
    category: "shellfish",
    height: `5' 03"`,
    weigth: "188.5lbs",
    description:
      "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
    type: "",
    abilities: "",
    png: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png`,
    gif: `https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif`,
  },
];

let confirmationMessage = "no message";

// 🚨📌📌📌 ----- ROTAS -----

app.get("/", (req, res) => {
  res.render("index", { pokedex, confirmationMessage });
  confirmationMessage = "no message";
});

app.get("/details/:id", (req, res) => {
  const index = Number(req.params.id);

  const chosenPokemon = pokedex.find((pokemon) => pokemon.id === index);

  if (chosenPokemon) {
    res.render("details", { pokedex, chosenPokemon });
  } else {
    res.sendStatus(418);
  }
});

app.get("/register", (req, res) => {
  res.render("register", { pokedex });
});

app.post("/add", (req, res) => {
  const addedPokemon = req.body;

  addedPokemon.number.padStart(3, "0");
  addedPokemon.id = Number(addedPokemon.number);
  addedPokemon.weigth = addedPokemon.weigth.replace(" ", "");
  addedPokemon.png = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${addedPokemon.number}.png`;
  addedPokemon.gif = `https://img.pokemondb.net/sprites/black-white/anim/normal/${addedPokemon.name.toLowerCase()}.gif`;
  pokedex.push(addedPokemon);
  pokedex.sort((a, b) => a.id - b.id);

  confirmationMessage = "New Pokémon added successfully!";

  res.redirect("/");
});

app.get("/details", (req, res) => {
  res.render("details", { pokedex });
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
