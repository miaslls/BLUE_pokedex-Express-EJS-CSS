'use strict';

const mainContent = document.getElementById('mainContent');

mainContent.style.opacity = '0';

window.onload = () => {
    mainContent.style.opacity = '1';
}

setTimeout(() => { mainContent.style.opacity = '1'; }, 500);

// 📌 DIRECTIONAL BUTTONS 

const directionalBtn_up = document.getElementById('directionalBtn_up');
const directionalBtn_left = document.getElementById('directionalBtn_left');
const directionalBtn_right = document.getElementById('directionalBtn_right');
const directionalBtn_down = document.getElementById('directionalBtn_down');

let btnHoverTip = document.getElementById('btnHoverTip');

// 👁‍🗨 refactor using FOR ... OF

directionalBtn_up.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'expand';
});

directionalBtn_left.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'previous';
});

directionalBtn_right.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'next';
});

directionalBtn_down.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'colapse';
});

directionalBtn_up.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
});

directionalBtn_left.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
});

directionalBtn_right.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
});

directionalBtn_down.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
});

// 📌 A B BUTTONS HOVER

const btnA = document.getElementById('btnA');
const btnB = document.getElementById('btnB');

btnA.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'ADD Pokémon';
    btnA.style.fontFamily = 'Dripicons';
    btnA.innerText = '';
});

btnB.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'view details';
    btnB.style.fontFamily = 'Dripicons';
    btnB.innerText = '';
});

btnA.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
    btnA.style.fontFamily = 'finalsix';
    btnA.innerText = 'A';
});

btnB.addEventListener('mouseleave', () => {
    btnHoverTip.innerText = '';
    btnB.style.fontFamily = 'finalsix';
    btnB.innerText = 'B';
});

// 📌 SLIDESHOW 

let slideIndex = 1;
const slides = document.getElementsByClassName("screenContent");
showSlides(slideIndex);

directionalBtn_left.addEventListener('click', () => {
    plusSlides(-1);
});
directionalBtn_right.addEventListener('click', () => {
    plusSlides(1);
});


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}

// 📌 EXPAND / CONDENSE GAMEBOY CONTAINER

const gameboyContainer = document.getElementById('gameboyContainer');
const mainContainer = document.getElementById('mainContainer');
const mainContainer_innerContent = document.getElementsByClassName('mainContainer_innerContent');

directionalBtn_up.addEventListener('click', () => {

    for (let content of mainContainer_innerContent) {
        content.style.display = 'none';
    }

    mainContainer.setAttribute('class', 'colapsed');
    gameboyContainer.setAttribute('class', 'gameboyContainer expanded');
});

directionalBtn_down.addEventListener('click', () => {
    gameboyContainer.setAttribute('class', 'gameboyContainer');
    mainContainer.removeAttribute('class');

    setTimeout(() => {

        for (let content of mainContainer_innerContent) {
            content.style.display = 'flex';
        }

    }, 300);

});

// 📌 MENU

const menuItems = document.getElementsByClassName('menuItem');

for (let item of menuItems) {
    item.addEventListener('click', () => {
        mainContent.style.opacity = '0';

        setTimeout(() => {

            switch (item.id) {
                case 'menu_all':
                    window.location.href = '/';
                    break;
                case 'menu_new':
                    window.location.href = '/register';
                    break;
                case 'menu_info':
                    window.location.href = '/info';
                    break;
            }
        }, 500);
    })
}

// 📌 AB BUTTONS REDIRECT

btnA.addEventListener('click', () => {
    mainContent.style.opacity = '0';

    setTimeout(() => { window.location.href = `/register`; }, 500);
});

btnB.addEventListener('click', () => {
    mainContent.style.opacity = '0';

    setTimeout(() => { window.location.href = `/details/${slideIndex}`; }, 500);
});