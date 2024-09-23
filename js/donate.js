// Helper functions to get input and text field values
function getInputFieldValueById(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function getTextFiledValueById(id) {
    return parseFloat(document.getElementById(id).innerText) || 0;
}


function addDonationEventListener(buttonId, inputId, balanceId) {
    document.getElementById(buttonId)
        .addEventListener('click', function (event) {
            event.preventDefault();

            const addMoney = getInputFieldValueById(inputId);
            const balance = getTextFiledValueById(balanceId);
            const newBalance = balance + addMoney;

            document.getElementById(balanceId).innerText = newBalance;

            const transaction = {
                amount: addMoney,
                date: new Date().toLocaleString(),
                cause: balanceId === 'donate-balance' ? "Flood at Noakhali" :
                       balanceId === 'feni-donate-balance' ? "Flood Relief in Feni" :
                       "Aid for Injured in the Quota Movement"
            };

            const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
            transactions.push(transaction);
            localStorage.setItem('transactions', JSON.stringify(transactions));

            document.getElementById(inputId).value = '';
        });
}

// Adding event listeners for each donation button
addDonationEventListener('donate-btn', 'donate-input', 'donate-balance');
addDonationEventListener('feni-donate-btn', 'feni-donate-input', 'feni-donate-balance');
addDonationEventListener('btn-quota', 'donate-quota-inpute', 'donate-quota-balance');
