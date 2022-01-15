let playerCount = 0;
let fields = [];
let player1 = '';
let player2 = '';
let gameOver = false;

function loadFirstPlayer() {
    document.getElementById('getPlayerName').innerHTML = player1 + ' ist dran.';
}

function setSign(index) {
    player(index);
    checkForWinner();
}

function start() {
    document.getElementById('startScreen').classList.remove('startScreenDesign');
    document.getElementById('startScreen').classList.add('d-none');
    getPlayerName();
    loadFirstPlayer();
}

function player(index) {
    if (!fields[index] && !gameOver) {
        if (playerCount == 0) {
            playerCount++;
            document.getElementById('getPlayerName').innerHTML = player2 + ' ist dran.';
            document.getElementById(`cross${index}`).classList.remove('d-none');
            fields[index] = player1;
        } else {
            playerCount = 0;
            document.getElementById('getPlayerName').innerHTML = player1 + ' ist dran.';
            document.getElementById(`circle${index}`).classList.remove('d-none');
            fields[index] = player2;
        }
    }
}
let winner;
function checkForWinner() {

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-0').style.transform = 'scaleX(1)';
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner + '!';
        gameOver = true;
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner + '!';
        gameOver = true;
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner + '!';
        gameOver = true;
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-3').style.transform = 'rotate(90deg) scaleY(1)';
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner + '!';
        gameOver = true;
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleY(1)';
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner + '!';
        gameOver = true;
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleY(1)';
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner + '!';
        gameOver = true;
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleY(1)';
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner + '!';
        gameOver = true;
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(-45deg) scaleY(1)';
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner + '!';
        gameOver = true;
    } if (gameOver) {
        setTimeout(function () {
            document.getElementById('gameOverEnable').classList.remove('d-none');
            document.getElementById('gameOverEnable').classList.add('gameOverSort');
        }, 500);
    }
}

function getPlayerName() {
    player1 = document.getElementById('player1-name').value;
    player2 = document.getElementById('player2-name').value;
}