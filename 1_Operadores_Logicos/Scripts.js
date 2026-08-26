function comparar(){

    let comparacionFinal = document.getElementById ("comparacion");

    let elementoNumero1 = document.getElementById ("numero1")
    let numeroo1 = elementoNumero1.value


    let elementoNumero2 = document.getElementById ("numero2")
    let numeroo2 = elementoNumero2.value

    let mayorOmenor = numeroo1 >= numeroo2;
    comparacionFinal.textContent = mayorOmenor;
}