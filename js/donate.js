const date = Date()

document.getElementById('donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if(isNaN(cashOut)){
        //     alert('Failed to cash out!');
        //     return;
        // }

        const addMoney = getInputFieldValueById('donate-input')
        const balance = getTextFiledValueById('donate-balance')

        const newBalance = balance + addMoney;
        document.getElementById('donate-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);



    })
    // fenir 
document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if(isNaN(cashOut)){
        //     alert('Failed to cash out!');
        //     return;
        // }

        const addMoney = getInputFieldValueById('feni-donate-input')
        const balance = getTextFiledValueById('feni-donate-balance')

        const newBalance = balance + addMoney;
        document.getElementById('feni-donate-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);



    })

document.getElementById('btn-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // if(isNaN(cashOut)){
        //     alert('Failed to cash out!');
        //     return;
        // }

        const addMoney = getInputFieldValueById('donate-quota-inpute')
        const balance = getTextFiledValueById('donate-quota-balance')

        const newBalance = balance + addMoney;
        document.getElementById('donate-quota-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} Withdraw. New Balance ${newBalance}</p>
        `

        document.getElementById('transaction-container').appendChild(div);



    })