let height = 0;
let widht = 0;
let vidas = 1;
let time = 15;
let criaMosquitoTempo = 1500;

document.querySelector('.timer').innerHTML = time; 

let level = window.location.search.replace('?', '');

if (level === 'normal') {
    criaMosquitoTempo = 1500;
}
if (level === 'dificil') {
    criaMosquitoTempo = 1000;
}
if (level === 'chucknorris') {
    criaMosquitoTempo = 750;
};

console.log(criaMosquitoTempo);

function ajustaTamanhoPalcoJogo() {
    height = window.innerHeight
    widht = window.innerWidth
};

ajustaTamanhoPalcoJogo();

const timer = setInterval(function(){
    time -= 1; 

    if(time < 0){
        clearInterval(timer);
        clearInterval(criaMosca);
        window.location.href = 'win.html';
    }else {
        document.querySelector('.timer').innerHTML = time; 
    }        
},1000);

function randomPosition() {

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas > 3) {
            window.location.href = 'gameOver.html';
        }else {
            document.querySelector('.v' + vidas).src = '../imagens/coracao_vazio.png';

            vidas++;
        }       
    }
    
    let positionX = Math.floor(Math.random() * widht) - 90;
    let positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    console.log(positionX,positionY);

    const mosquito =  document.createElement('img');
    mosquito.setAttribute('src', '../imagens/mosca.png')
    mosquito.className = randomSize() + ' ' + randomSide();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.addEventListener('click', function() {
        this.remove();
    })

    document.body.appendChild(mosquito);
}

function randomSize() {
    const classe = Math.floor(Math.random() * 3);

    if (classe === 0) return 'mosquito1';
    if (classe === 1) return 'mosquito2';
    if (classe === 2) return 'mosquito3';
}

randomPosition()

function randomSide() {
    const classe = Math.floor(Math.random() * 2);

    if (classe === 0) return 'ladoA';
    if (classe === 1) return 'ladoB';
}

const criaMosca = setInterval(function() {
    randomPosition()
},criaMosquitoTempo);