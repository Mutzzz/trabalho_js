function maximo() {
    let valorA = parseInt(document.getElementById('numeroA').value);
    let valorB = parseInt(document.getElementById('numeroB').value);
    
    if (valorA > valorB) {
        alert('O resultado foi ' + valorA);
        return valorA;
    } else {
        alert('O resultado foi ' + valorB);
        return valorB;
    }
}