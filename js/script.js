document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ticketForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calcolaPrezzo();
    });
});

function calcolaPrezzo() {
    let km = parseFloat(document.getElementById('km').value);
    let eta = parseInt(document.getElementById('eta').value);

    // Calcolo del prezzo base
    let prezzoBase = km * 0.21;

    // Applica lo sconto in base all'età
    let prezzoFinale;
    if (eta < 18) {
        prezzoFinale = prezzoBase * 0.8; 
    } else if (eta >= 65) {
        prezzoFinale = prezzoBase * 0.6; 
    } else {
        prezzoFinale = prezzoBase;           
    }

    // Arrotonda il prezzo finale a due decimali
    prezzoFinale = prezzoFinale.toFixed(2);

    // Aggiorna il risultato nella pagina
    document.getElementById('km-result').textContent = km;
    document.getElementById('eta-result').textContent = eta;
    document.getElementById('prezzo-result').textContent = prezzoFinale;

    // Mostra il risultato
    document.getElementById('result').classList.remove('hidden');

    // Log del risultato nella console
    console.log(`Il prezzo del biglietto per ${km} km e ${eta} anni è: ${prezzoFinale} €`);
}