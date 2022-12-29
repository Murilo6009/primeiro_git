function soma() {
    var campo1 = document.getElementById('campo1');
    var campo2 = document.getElementById('campo2');
    var resultado = document.getElementById('resultado');
    //parseInt está passando o valor para inteiros
    // resultado.value = parseFloat(campo1.value) + parseFloat(campo2.value)
    alert(parseFloat(campo1.value) + parseFloat(campo2.value));
};
function subtracao() {
    var campo3 = document.getElementById('campo3');
    var campo4 = document.getElementById('campo4');    
    alert(parseFloat(campo3.value) - parseFloat(campo4.value))
};
function divisao() {
    var campo7 = document.getElementById('campo7');
    var campo8 = document.getElementById('campo8');
    alert(parseFloat(campo7.value) / parseFloat(campo8.value))
};
function multiplicacao() {
    var campo9 = document.getElementById('campo9');
    var campo10 = document.getElementById('campo10');
    alert(parseFloat(campo9.value) * parseFloat(campo10.value))
};
