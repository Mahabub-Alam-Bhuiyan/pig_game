
var scores,raundScore,activePlayer,dice,gameplaying;
var lastdice;

init();

document.querySelector('.btn--roll').addEventListener('click',function () {

    if (gameplaying) {

//    1. Random Number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

//    2. display the output
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        // 3. Update the round score if the rolled number was not a 1

        if (dice1 !== 1 && dice2 !== 1) {
            //add score
            raundScore += dice1 + dice2;
            document.querySelector('#current--' + activePlayer).textContent = raundScore;
        } else {
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

      var input = document.querySelector('.final-score').value;
      var  winingvalue;

      if (input){
          winingvalue = input;
      }else{
          winingvalue = 20;
      }

//  3. win show
      if(scores[activePlayer] >=  winingvalue){
          document.querySelector('#name--' + activePlayer).textContent = 'Winner!!';
          document.querySelector('#dice-1').style.display = 'none';
          document.querySelector('#dice-2').style.display = 'none';
          document.querySelector('.player--' + activePlayer).classList.add('player--winner');
          document.querySelector('.player--' + activePlayer).classList.remove('active');
          gameplaying = false;
      }else{
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

    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';


}

document.querySelector('.btn--new').addEventListener('click', init);

function init(){
    scores = [0,0];
    raundScore = 0;
    activePlayer = 0;
    gameplaying = true;

    document.querySelector('#dice-1').style.display = "none"
    document.querySelector('#dice-2').style.display = "none"

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
