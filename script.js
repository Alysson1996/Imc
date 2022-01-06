var idade = document.getElementById("idade");
var InputPeso = document.getElementById("peso");
var InputAltura = document.getElementById("altura");
var tela = document.getElementById("tela");
//var imc = document.getElementById("imc");

function botao(){
    var peso = InputPeso.value;
    var altura = InputAltura.value;

    var imc = peso / (altura * altura);
    console.log(Math.ceil(imc))
    tela.innerHTML = `<p> O SEU IMC = ${(imc.toFixed(1))};`;
    
    

    console.log(24.9 * altura * altura)
    if (imc < 18.5){
        
        tela.innerHTML += "<p>STATUS = MAGREZA;"
        tela.innerHTML += `PESO IDEAL ENTRE: ${(18.5 * altura * altura).toFixed(1)} a ${(24.9 * altura * altura).toFixed(1)};`
    }
    if (imc >= 18.5 && imc <= 24.9){
        tela.innerHTML += "<p>STATUS = PESO IDEAL;"
        tela.innerHTML += `PESO IDEAL ENTRE: ${(18.5 * altura * altura).toFixed(1)} a ${(24.9 * altura * altura).toFixed(1)};`
    }
    if (imc > 24.9 && imc <= 30 ){
        tela.innerHTML += "<p>STATUS = SOBREPESO;"
        tela.innerHTML += `PESO IDEAL ENTRE: ${(18.5 * altura * altura).toFixed(1)} a ${(24.9 * altura * altura).toFixed(1)};`

    }
    if (imc > 30){
        tela.innerHTML += "<p>STATUS = OBESIDADE;"
        tela.innerHTML += `PESO IDEAL ENTRE: ${(18.5 * altura * altura).toFixed(1)} a ${(24.9 * altura * altura).toFixed(1)};`
    }
    
    

    

}

