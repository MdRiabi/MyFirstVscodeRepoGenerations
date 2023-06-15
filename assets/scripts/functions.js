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


const startGameBtn = document.getElementById('start-game-btn');


function startGame() {
    console.log('Game is Starting...');
}

//startGame();
startGameBtn.addEventListener('click', startGame);