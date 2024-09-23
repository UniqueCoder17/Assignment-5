

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}


function getTextFiledValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionById(id){
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');

    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('bg-[#B4F461]');
     
}