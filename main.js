const startGame = document.querySelector('.start');
const levelGame = document.querySelector('#level');


function playGame() {
    startGame.addEventListener('click', (e) =>{
        if(levelGame.value === '') {
            alert('Selecione um nível para iniciar o jogo');
            return false;
        }

        window.location.href = 'app.html?' + levelGame.value;
    })
};
playGame();
