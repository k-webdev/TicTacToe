let playerCount = 0;
let fields = [];

function setSign(index) {
    player(index);
    checkForWinner();
}

function player(index) {
    if (playerCount == 0) {
        playerCount++;
        document.getElementById('getPlayerName').innerHTML = 'Player 2';
        document.getElementById(`cross${index}`).classList.remove('d-none');
        fields[index] = 'Kreuz';
        console.log(fields);
    } else {
        playerCount = 0;
        document.getElementById('getPlayerName').innerHTML = 'Player 1';
        document.getElementById(`circle${index}`).classList.remove('d-none');
        fields[index] = 'Kreis';
        console.log(fields);
    }
}
let winner;
function checkForWinner(){
    
    if(fields[0] == fields[1] && fields[1] == fields[2] && fields[0]){
        winner = fields[0];
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner +'!';
    }
    if(fields[3] == fields[4] && fields[4] == fields[5] && fields[3]){
        winner = fields[3];
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner +'!';
    }
    if(fields[6] == fields[7] && fields[7] == fields[8] && fields[6]){
        winner = fields[6];
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner +'!';
    }
    if(fields[0] == fields[3] && fields[3] == fields[6] && fields[0]){
        winner = fields[0];
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner +'!';
    }
    if(fields[1] == fields[4] && fields[4] == fields[7] && fields[1]){
        winner = fields[1];
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner +'!';
    }
    if(fields[2] == fields[5] && fields[5] == fields[8] && fields[2]){
        winner = fields[2];
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner +'!';
    }
    if(fields[0] == fields[4] && fields[4] == fields[8] && fields[0]){
        winner = fields[0];
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner +'!';
    }
    if(fields[2] == fields[4] && fields[4] == fields[6] && fields[2]){
        winner = fields[2];
        document.getElementById('getPlayerName').innerHTML = 'Der Gewinner ist: ' + winner +'!';
    }else{
        return;
    }
}