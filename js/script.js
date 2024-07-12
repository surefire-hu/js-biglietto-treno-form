document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcola').addEventListener('click', calcolaPrezzo);
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

    // Mostra il risultato nella console
    console.log("Il prezzo del tuo biglietto è: " + prezzoFinale + " €");
}
