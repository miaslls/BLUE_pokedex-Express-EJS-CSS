'use strict'

let menu_all = document.getElementById('menu_all');

const confirmationMessage = document.getElementById('confirmationMessage');
const confirmationText = document.getElementById('confirmationText');


window.onload = () => {
    menu_all.setAttribute('class', 'menuItem focused');

    if (confirmationText.innerText.trim() !== 'no message') { confirmationMessage.style.display = 'flex'; }
}

setTimeout(() => { confirmationMessage.style.display = 'none'; }, 2000);

// 📌 pokemon DETAILS

const pokemonCards = document.getElementsByClassName('pokemonCardBox');

for (let card of pokemonCards) {


    card.addEventListener('click', () => {

        mainContent.style.opacity = '0';

        setTimeout(() => { window.location.href = `/details/${card.id}`; }, 500);

    });

}