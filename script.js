
var scores,raundScore,activePlayer,dice,gameplaying;

init();


document.querySelector('.btn--roll').addEventListener('click',function (){

    if (gameplaying){

//    1. Random Number
        dice = Math.floor(Math.random() *6 ) + 1 ;

//    2. display the output
        var diceDom = document.querySelector('.dice');
        document.querySelector('.dice').style.display = "block";
        diceDom.src = 'dice-' + dice + '.png';

//    3. Update the round score if the rolled number was not a 1

        if (dice !== 1){
            raundScore += dice;
            document.querySelector('#current--' + activePlayer).textContent = raundScore;
        }else{
            nextplayer();
        }

    }
});


document.querySelector('.btn--hold').addEventListener('click',function (){

if (gameplaying){
    //    1. add current score to global score

    scores[activePlayer] += raundScore;

// 2. Update Ui

    document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

//  3. win show
    if(scores[activePlayer] >=  20){
        document.querySelector('#name--' + activePlayer).textContent = 'Winner!!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player--' + activePlayer).classList.add('player--winner');
        document.querySelector('.player--' + activePlayer).classList.remove('active');
        gameplaying = false;
    }else{
        //  next player
        nextplayer();

    }
}

});

function nextplayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    raundScore = 0;

    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.querySelector('.player--0').classList.toggle('player-active');
    document.querySelector('.player--1').classList.toggle('player-active');
    // document.querySelector('.player--1').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn--new').addEventListener('click', init);

function init(){
    scores = [0,0];
    raundScore = 0;
    activePlayer = 0;
    gameplaying = true;

    document.querySelector('.dice').style.display = "none"

    document.getElementById('score--0').textContent = '0';
    document.getElementById('score--1').textContent = '0';
    document.getElementById('current--0').textContent = '0';
    document.getElementById('current--1').textContent = '0';

    document.getElementById('name--0').textContent = 'Player-1';
    document.getElementById('name--1').textContent = 'Player-2';

    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');

    document.querySelector('.player--0').classList.remove('player-active');
    document.querySelector('.player--1').classList.remove('player-active');

    document.querySelector('.player--0').classList.add('player-active');

}


