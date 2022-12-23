function soma() {
    var campo1 = document.getElementById('campo1');
    var campo2 = document.getElementById('campo2');
    var resultado = document.getElementById('resultado')

    //parseInt está passando o valor para inteiros
    resultado.value = parseFloat(campo1.value) + parseFloat(campo2.value) 
};

function subtracao() {
    alert(parseFloat(campo1.value) - parseFloat(campo2.value));
};

function divisao() {
    alert(parseFloat(campo1.value) / parseFloat(campo2.value));
};

function multiplicacao() {
    alert(parseFloat(campo1.value) * parseFloat(campo2.value));
};
