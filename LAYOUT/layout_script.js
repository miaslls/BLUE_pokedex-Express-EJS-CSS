'use strict';

// 📌 DIRECTIONAL BUTTONS

const directionalBtn_up = document.getElementById('directionalBtn_up');
const directionalBtn_left = document.getElementById('directionalBtn_left');
const directionalBtn_right = document.getElementById('directionalBtn_right');
const directionalBtn_down = document.getElementById('directionalBtn_down');

let btnHoverTip = document.getElementById('btnHoverTip');

// 👁‍🗨 refactor using FOR ... OF

directionalBtn_up.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'condense';
});

directionalBtn_left.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'previous';
});

directionalBtn_right.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'next';
});

directionalBtn_down.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'expand';
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

// 📌 A B BUTTONS

let btnA = document.getElementById('btnA');
let btnB = document.getElementById('btnB');

btnA.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'edit';
    btnA.style.fontFamily = 'Dripicons';
    btnA.innerText = '';
});

btnB.addEventListener('mouseenter', () => {
    btnHoverTip.innerText = 'delete';
    btnB.style.fontFamily = 'Dripicons';
    btnB.innerText = '';
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
let slides = document.getElementsByClassName("screenContent");
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
    slides[slideIndex - 1].style.display = "block";
}