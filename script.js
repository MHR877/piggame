'use strict';

const btnHold = document.querxySelector(".btn--hold")
const btnRoll = document.querySelector(".btn--roll")
const btnNew = document.querySelector(".btn--new")
const img = document.querySelector("img")
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const scoreEl0 = document.getElementById("score--0")
const current0 = document.getElementById("current--0")
const scoreEl1 = document.getElementById("score--1")
const current1 = document.getElementById("current--1")

img.style.display = "none"

const score = [0, 0]
let crntScore = 0;
let activePlayer = 0;

function init() {
    score[0] = 0;
    score[1] = 0;

    crntScore = 0;
    activePlayer = 0;
    img.style.display = "none"

    scoreEl0.textContent = 0;
    current0.textContent = 0;
    scoreEl1.textContent = 0;
    current1.textContent = 0;

    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    player0.classList.add("player--active")
    player1.classList.remove("player--active")
};
init();

function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer == 0 ? 1 : 0;
    crntScore = 0
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

btnRoll.addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 6) + 1
    if (score[activePlayer] < 100)
        img.style.display = "block"
    img.src = `dice-${randomNum}.png`;

    if (randomNum == 1) {
        switchPlayer()
    } else {
        crntScore += randomNum;
        document.getElementById(`current--${activePlayer}`).textContent = crntScore;
    }
    console.log(activePlayer);
})

btnHold.addEventListener('click', () => {
    score[activePlayer] += crntScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    if (score[activePlayer] >= 100) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
        player0.classList.remove('player--active');
        player1.classList.remove('player--active');
        img.style.display = "none"
        activePlayer = ""
    } else {
        switchPlayer()
    }
})

btnNew.addEventListener('click', init)