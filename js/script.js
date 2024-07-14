document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();
    calculateTicket();
});

function calculateTicket() {
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = parseInt(document.getElementById('age').value);
    const km = parseFloat(document.getElementById('km').value);

    const basePrice = km * 0.21;
    let discount = 0;
    let finalPrice = basePrice;

    if (age < 18) {
        discount = 20;
        finalPrice *= 0.8;
    } else if (age > 65) {
        discount = 40;
        finalPrice *= 0.6;
    }

    document.getElementById('resultName').textContent = name;
    document.getElementById('resultSurname').textContent = surname;
    document.getElementById('resultAge').textContent = age;
    document.getElementById('resultKm').textContent = km;
    document.getElementById('resultBasePrice').textContent = basePrice.toFixed(2);
    document.getElementById('resultDiscount').textContent = discount;
    document.getElementById('resultFinalPrice').textContent = finalPrice.toFixed(2);

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('ticketForm').classList.add('hidden');
}