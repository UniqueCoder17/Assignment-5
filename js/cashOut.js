

// Donate for Noakhali
document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();


        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }


        const cashOut = getInputFieldValueById('donate-input')
        const balance = getTextFiledValueById('account-balance')
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

    })


// Donate for Feni
document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();


        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }


        const cashOut = getInputFieldValueById('feni-input')
        const balance = getTextFiledValueById('account-balance')
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

    })


// Donate for quota
document.getElementById('btn-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();


        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }


        const cashOut = getInputFieldValueById('quota-input')
        const balance = getTextFiledValueById('account-balance')
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

    })



