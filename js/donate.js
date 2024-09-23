
// Donate for Noakhali
document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }

        const cashOut = getInputFieldValueById('donate-input')
        const balance = getTextFiledValueById('donate-balance')
        const newBalance = balance + cashOut;
        document.getElementById('donate-balance').innerText = newBalance;

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
        const balance = getTextFiledValueById('feni-donate-balance')
        const newBalance = balance + cashOut;
        document.getElementById('feni-donate-balance').innerText = newBalance;

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
        const balance = getTextFiledValueById('donate-quota-balance')
        const newBalance = balance + cashOut;
        document.getElementById('donate-quota-balance').innerText = newBalance;

    })


