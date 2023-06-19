// functions are "code on demand"
//  variables and constants created in functions "belong" th*o that function
// function CAN take parameters(arguments) and can return a value
// functions can be called multiple times (with different argument)
// functions can be called "directly"with parentheses or indirectly 

//function sayHi(name) { ... } 
//In this example, name is a parameter.

//sayHi('Max');
//'Max' is an argument of the function therefore - for the name parameter to be precise.



// const person = {
//name: 'max',
//greet: function greet(){
  //  console.log('hello there!');
//}
//}
//   the greet function called a method of the person object

// we can store the function in constant but the function scope will be block not globaly


// const abc = function(){}; --> is called ananymous function she must ended by ';'
//or startGameBtn.addEventListener('click', function(){...});

//function declaration/statment --> function multiply(a,b){return a*b;}
//function expression --> const a = function(a,b){return a*b;}





//function startGame() {
    console.log('Game is Starting...');
//}

//startGame();
//startGameBtn.addEventListener('click', startGame);

const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DROW = 'DROW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = ()=>{
  const selection = prompt(`${ROCK},${PAPER},${SCISSORS}?`,"").toUpperCase();

  if(selection!==ROCK && selection!== PAPER && selection!==SCISSORS){
    alert(`invalid choice! we chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = ()=>{
 const randomValue = Math.random();
// randomValue <0.34 ? ROCK : randomValue<0.67 ? PAPER : SCISSORS ;
  if(randomValue <0.34){
  return ROCK;
  }else if(randomValue <0.67){
  return PAPER;
  }else{
  return SCISSORS;
 } 
};

const getResult = (playerSelection, computerSelection)=>{

  return computerSelection === playerSelection ? RESULT_DROW
   :(computerSelection ===ROCK && playerSelection ===PAPER) ||
    (computerSelection ===PAPER && playerSelection ===SCISSORS) ||
    (computerSelection ===SCISSORS && playerSelection ===ROCK) ? RESULT_PLAYER_WINS 
    : RESULT_COMPUTER_WINS ;

  /* if(playerSelection === computerSelection){
    return RESULT_DROW;
  }else if(computerSelection ===ROCK && playerSelection ===PAPER ||
    computerSelection ===PAPER && playerSelection ===SCISSORS ||
    computerSelection ===SCISSORS && playerSelection ===ROCK){
    return RESULT_PLAYER_WINS;
  }
  else  {
    return RESULT_COMPUTER_WINS;
  } */
};

startGameBtn.addEventListener('click', ()=>{
if(gameIsRunning){
  return; 
}
gameIsRunning = true;
console.log('Game is starting...');
const playerChoice = getPlayerChoice();
const computerChoice = getComputerChoice();
const resultChoice = getResult(playerChoice, computerChoice);

let message = `You picked ${playerChoice} and computer picked ${computerChoice}`;
if(resultChoice === RESULT_DROW){
  message = message + 'had a drow.!';
} else if(resultChoice === RESULT_PLAYER_WINS) {
  message = message + 'won!';
} else  {
  message = message + 'lost!';
}
alert(message);
gameIsRunning = false;
});

// arrow function javascript const add = (a, b) => a + b; is the same as const add = function(a, b){ return a + b} 
//const log = message => {
 // console.log(message); // could also return something of course - this example just doesn't
//};
//Noteworthy: Parentheses around parameter list can be omitted (for exactly one argument).
