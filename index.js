const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [{
        id: 1,
        name: "Bulbasaur",
        type: "Grass",
        img_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
    },
    {
        id: 2,
        name: "Charmander",
        type: "Fire",
        img_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png"
    },
    {
        id: 3,
        name: "Squirtle",
        type: "Water",
        img_url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png"
    }
]

// 🚨📌📌📌 ----- ROTAS -----

app.get("/", (req, res) => {
    res.render("index", { pokedex });
});

app.post("/add", (req, res) => {

});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));