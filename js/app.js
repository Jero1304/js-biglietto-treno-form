const PREZZZO_PER_KM = 0.21;

// calcola il prezzo del biglietto al click

const formBtnEle = document.getElementById('form-btn');
console.log(formBtnEle); // non è un numero

const distanzaEle = document.getElementById('distanza');
const selectEle = document.getElementById('sconto');
console.log(selectEle);

formBtnEle.addEventListener('click', function(){
    console.log('al click');

    let km = distanzaEle.value;
    let kmNumber = parseFloat(km);
    console.log(kmNumber);
    let prezzoBase = km * PREZZZO_PER_KM;

    console.log('prezzo base: ' + prezzoBase);
    
    let sconto = 0;
    const scontoSelezionato = selectEle.value;
    console.log(scontoSelezionato);

    if(scontoSelezionato === 'caso-1'){
        sconto = prezzoBase * 0.2;

    }else if(scontoSelezionato === 'caso-2'){
        sconto = prezzoBase * 0.4;
    }

    const prezzoFinale = prezzoBase - sconto;

    console.log(prezzoBase, sconto, prezzoFinale);

})