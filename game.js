let value = sessionStorage.getItem('n-players');

console.log(value)

let playArray = []

if (value === '2 players') {
    console.log(true)
    for (i = 0; i < 2; i++) {
        let play = document.createElement('div')
        play.className = 'ply1'
        playArray.push(play)
    }
}
if (value === '3 players') {
    console.log(true)
    for (i = 0; i < 3; i++) {
        let play = document.createElement('div')
        play.className = 'ply1'
        playArray.push(play)
    }
}
if (value === '4 players') {
    console.log(true)
    for (i = 0; i < 4; i++) {
        let play = document.createElement('div')
        play.className = 'ply1'
        playArray.push(play)
    }
}

let playResult = document.querySelector('.plyresult');

let sp = []
for (i = 0; i < 2; i++) {
    let spans = document.createElement('span');
    sp.push(spans)
    console.log(sp)
}

playArray.forEach((value, index, array) => {
    value.innerHTML =`<span id="ply1res">Player ${index + 1} ;</span>
        <span id="ply1score">0</span>`
    playResult.appendChild(value)
})

let turn = document.querySelector('.player1-turn')
let showRes = document.querySelector('#res')
let eventTurn = playArray.length - 1;
let btn = document.getElementById('rnd');

btn.addEventListener('click', () => {
   let res = Math.floor(Math.random() * 10)
   showRes.innerHTML = res
})

let counter = 0;