const gameData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

let editedPlayer=0;
let activePlayer=0;
let currentRound=1;

const players = [
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    },
]; 

const playerConfigOverlayElement=document.getElementById('config-overlay');
const backdropElement=document.getElementById('backdrop');
const formElement=document.querySelector('form');
const errorOutputElement=document.getElementById('config-error');
const gameAreaElement=document.getElementById('active-game');
const activePlayerNameElement=document.getElementById('active-player-name');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-config-btn');
const startNewGameElement=document.getElementById('start-game-btn');
const gameFieldElements = document.querySelectorAll('#game-board li');



editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
startNewGameElement.addEventListener('click', startNewGame);

for(const gameFieldElement of gameFieldElements){
    gameFieldElement.addEventListener('click', selectGameField);
}