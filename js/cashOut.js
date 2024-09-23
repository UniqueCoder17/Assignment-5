

// Donate for Noakhali
document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('donate-input')
        const balance = getTextFiledValueById('account-balance')

        if (isNaN(addMoney) || addMoney <= 0) {          
            return;
        }

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

    })


// Donate for Feni
document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('feni-input')
        const balance = getTextFiledValueById('account-balance')

        if (isNaN(addMoney) || addMoney <= 0) {       
            return;
        }

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

    })


// Donate for quota
document.getElementById('btn-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('quota-input')
        const balance = getTextFiledValueById('account-balance')

        if (isNaN(addMoney) || addMoney <= 0) {
            return;
        }

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

    })



