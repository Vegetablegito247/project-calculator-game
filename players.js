let player2 = document.getElementById('player2');
let player3 = document.getElementById('player3');
let player4 = document.getElementById('player4');

function createTwoPlayers() {
    for (let i = 0; i < 2; i++) {
        let play = document.createElement('div');

        let dataCollector = document.querySelector('.empty');
        dataCollector.appendChild(play);
    };
};

function createThreePlayers() {
    for (let i = 0; i < 3; i++) {
        let play = document.createElement('div');

        let dataCollector = document.querySelector('.empty');
        dataCollector.appendChild(play);
    };
};

function createFourPlayers() {
    for (let i = 0; i < 4; i++) {
        let play = document.createElement('div');

        let dataCollector = document.querySelector('.empty');
        dataCollector.appendChild(play);
    };
};



// player2.addEventListener('click', () => {
//     player2.className = 'selected';
//     if (player2.className == 'selected') {
//         createTwoPlayers();
//     }
//     else {
//         return false;
//     }
// }, {
//     once: true
// });

// player3.addEventListener('click', () => {
//     player3.className = 'selected';
//     if (player3.className == 'selected') {
//         createThreePlayers();
//     }
//     else {
//         return false;
//     }
// }, {
//     once: true
// });
// player4.addEventListener('click', () => {
//     player4.className = 'selected';
//     if (player4.className == 'selected') {
//         createFourPlayers();
//     }
//     else {
//         return false;
//     }
// }, {
//     once: true
// });
// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors());
// app.use(express.static(`${__dirname}/game`));

// app.get('/', (req, res) => {
//     res.sendFile(`index.html`);
// });

// app.get('/game',  (req, res) => {
//     res.sendFile(`${__dirname}/game/game.html`);
// });

// app.listen(3000, () => {
//     console.log('server started....')
// })

let selected = 'selected';
let notSelected = 'notSelected'
const startBtn = document.getElementById('start');
const playerBtns = [player2, player3, player4];

sessionStorage.removeItem('n-players');

function revertBtn(index) {
    Array.from(playerBtns).forEach((btn, i) => {
        if(i !== index) {
            btn.className = notSelected;
        }
    });
};

Array.from(playerBtns).forEach((btn, index) => {
    btn.addEventListener('click', () => {
        btn.className = selected;

        sessionStorage.setItem('n-players', btn.innerText.toLowerCase());

        revertBtn(index);
    });
});

startBtn.addEventListener('click', () => {
    if (sessionStorage.getItem('n-players')) {
        window.location = `./game.html`;
    }
});