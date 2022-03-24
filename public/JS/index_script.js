'use strict'

let menu_all = document.getElementById('menu_all');

window.onload = () => {
    menu_all.setAttribute('class', 'menuItem focused');
}

// 📌 pokemon DETAILS

const pokemonCards = document.getElementsByClassName('pokemonCardBox');

for (let card of pokemonCards) {

    console.log(card.id); // FIXME:

    card.addEventListener('click', () => {

        mainContent.style.opacity = '0';

        setTimeout(() => { window.location.href = `/details/${card.id}`; }, 500);



    });

}