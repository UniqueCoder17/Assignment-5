

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