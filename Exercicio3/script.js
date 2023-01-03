function somar() {
    var campo1 = document.getElementById('campo1').value;
    var campo2 = document.getElementById('campo2').value;
    var resultado = (parseFloat(campo1) + parseFloat(campo2));

    document.getElementById('resultado').innerHTML = resultado;
}

function limpar() {
    document.getElementById('resultado').innerHTML = 0;
}