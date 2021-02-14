function subtract() {
    let firstNumber = document.querySelector('#firstNumber');
    let secondNumber = document.querySelector('#secondNumber');
    let result = document.querySelector('#result');
    let firstNumValue = firstNumber.value;
    let secondNumValue = secondNumber.value;
    result.innerText = Number(firstNumValue) - Number(secondNumValue);
}