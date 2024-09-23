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

        const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;
            console.log(p);

            document.getElementById('transaction-container').appendChild(p);


    })


document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }

        const cashOut = getInputFieldValueById('feni-donate-input')
        const balance = getTextFiledValueById('account-balance')

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;
            console.log(p);

            document.getElementById('transaction-container').appendChild(p);


    })

document.getElementById('btn-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if (isNaN(cashOut) || cashOut <= 0) {
        //     alert('Please enter a valid amount to donate.');
        //     return;
        // }

        const cashOut = getInputFieldValueById('donate-quota-inpute')
        const balance = getTextFiledValueById('account-balance')

        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} TK. New Balance: ${newBalance}`;
            console.log(p);

            document.getElementById('transaction-container').appendChild(p);


    })



