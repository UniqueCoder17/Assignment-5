
// Donate for Noakhali
document.getElementById('donate-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney = getInputFieldValueById('donate-input');
    const balance = getTextFiledValueById('donate-balance');

    if (isNaN(addMoney) || addMoney <= 0) {
        alert("Please type a valid positive number for donation.");
        return;
    }

    const newBalance = balance + addMoney;
    document.getElementById('donate-balance').innerText = newBalance;


    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({
        amount: addMoney,
        cause: "Donate for Flood at Noakhali, Bangladesh",
        date: new Date().toLocaleString(),
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));
    my_modal_1.showModal();

});

// Donate for Feni
document.getElementById('feni-donate-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('feni-input')
        const balance = getTextFiledValueById('feni-donate-balance');

        if (isNaN(addMoney) || addMoney <= 0) {
            alert("Please type a valid positive number for donation.");
            return;
        }

        const newBalance = balance + addMoney;
        document.getElementById('feni-donate-balance').innerText = newBalance;

        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push({
            amount: addMoney,
            cause: "Donate for Flood Relief in Feni,Bangladesh",
            date: new Date().toLocaleString(),
        });
        localStorage.setItem('transactions', JSON.stringify(transactions));
        my_modal_2.showModal();

    })



// Donate for quota
document.getElementById('btn-quota')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('quota-input')
        const balance = getTextFiledValueById('donate-quota-balance')

        if (isNaN(addMoney) || addMoney <= 0) {
            alert("Please type a valid positive number for donation.");
            return;
        }

        const newBalance = balance + addMoney;
        document.getElementById('donate-quota-balance').innerText = newBalance;

        const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
        transactions.push({
            amount: addMoney,
            cause: "Aid for Injured in the Quota Movement",
            date: new Date().toLocaleString(),
        });
        localStorage.setItem('transactions', JSON.stringify(transactions));
        my_modal_3.showModal();

    })


