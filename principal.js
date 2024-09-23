// var paulo = document.querySelector('#Paulo');
// var pesoPaulo = paulo.querySelector(".info-peso").textContent;
// var alturaPaulo = paulo.querySelector(".info-altura").textContent;
// var imcPaulo = pesoPaulo / (alturaPaulo * alturaPaulo);
// paulo.querySelector(".info-imc").textContent = imcPaulo;

var pacientes = document.querySelectorAll('.paciente');
for(var contador = 0; contador < pacientes.length; contador++){
    var peso = pacientes[contador].querySelector('.info-peso').textContent;
    var altura = pacientes[contador].querySelector('.info-altura').textContent
    var imc = peso / (altura * altura);
    pacientes[contador].querySelector('.info-imc').textContent = imc.toFixed(2);
}