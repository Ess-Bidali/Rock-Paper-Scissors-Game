const choices = document.querySelectorAll('.choices');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
};

//Play game
function play(event) {
  restart.style.display ='inline-block';
  const playerChoice =event.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

//get computer's choice
function getComputerChoice(){
  const rand = Math.random();
  if(rand < 0.34){
    return 'rock';
  }
  else if(rand <= 0.67){
    return 'paper';
  }
  return 'scissors';
}

//get game winner
function getWinner(p, c){
  if(p === c){
    return 'draw';
  }

  else if(p === 'rock'){
    if(c === 'paper'){
      return 'computer';
    }
    return 'player';
  }

  else if(p === 'paper'){
    if(c === 'scissors'){
      return 'computer';
    }
    return 'player';
  }

  else if(p === 'scissors'){
    if(c === 'rock'){
      return 'computer';
    }
    return 'player';
  }
}

function showWinner(winner, computerChoice){
  if(winner === 'player'){
    scoreboard.player++;
    result.innerHTML = 
    `<h1 class="text-win">You Win!</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"</i>
    <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + 
    computerChoice.slice(1)}</strong></p>`;
    
  } else if(winner === 'computer'){
    scoreboard.computer++;
    result.innerHTML = 
    `<h1 class="text-lose">You Lose!</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"</i>
    <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + 
    computerChoice.slice(1)}</strong></p>`;
  } else {
    result.innerHTML = 
    `<h1>It's A Draw!</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"</i>
    <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+ 
    computerChoice.slice(1)}</strong></p>`;
  }

  updateScores();

  revealModal();
}

//Then show score
function updateScores(){
  score.innerHTML = 
  `<p>Player: ${scoreboard.player}</p>
  <p>Computer: ${scoreboard.computer}</p>`;
}

//Show modal
function revealModal(){
  modal.style.display = 'block';
}

//Clear modal
function exitModal(event){
  if(event.target === modal){
    modal.style.display = 'none';
  }
}

function restartGame(){
  scoreboard.player = 0;
  scoreboard.computer = 0;
  updateScores();
  restart.style.display = 'none';
  
}

//Event Listeners
choices.forEach(choice => choice.addEventListener('click',play));
window.addEventListener('click', exitModal);
restart.addEventListener('click', restartGame);