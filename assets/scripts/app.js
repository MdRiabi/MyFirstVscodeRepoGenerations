//alert('this work');
const  defaultResult =0;
let currentResult = defaultResult;

// get input value from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}
// generates and writes calculation log
function createAndWriteOutput(opertor,  resultBeforeCalc, calcNumber){

    const calcDescription = `${resultBeforeCalc}${opertor}${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add(){
    const entredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + entredNumber;
    createAndWriteOutput('+' , initialResult , entredNumber);
}

function subtract(){
    const entredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - entredNumber;
    createAndWriteOutput('-' , initialResult , entredNumber);
}

function multiply(){
    const entredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * entredNumber;
    createAndWriteOutput('*' , initialResult , entredNumber);
}

function divide(){
    const entredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / entredNumber;
    createAndWriteOutput('/' , initialResult , entredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);






//currentResult = currentResult + 10;
//let abc = '(' +currentResult+ '+1+12)+ 1';
//outputResult(currentResult , abc);
