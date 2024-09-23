document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }

        const cashOut = getInputFieldValueById('hello')
        const balance = getTextFiledValueById('account-balance')
        console.log("caseOUT=> ",cashOut )
        console.log("balance=> ",balance)
        const newBalance = balance - cashOut;
        console.log(newBalance)
        document.getElementById('account-balance').innerText = newBalance;

    })


document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }

        const cashOut = getInputFieldValueById('feni-hero')
        const balance = getTextFiledValueById('account-balance')

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

    })

document.getElementById('btn-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }

        const cashOut = getInputFieldValueById('quota-hero')
        const balance = getTextFiledValueById('account-balance')
        console.log(balance)

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
        
    })



