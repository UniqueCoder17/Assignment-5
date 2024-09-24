

function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return isNaN(inputNumber) ? 0 : inputNumber;
}

function getTextFiledValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return isNaN(textNumber) ? 0 : textNumber;
}