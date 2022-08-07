
var operandoa;
var operandob;
var operacion;

function init(){
var calculadoraResultado = document.getElementById("calculadoraResultado");
var reset = document.getElementById("reset");
var suma = document.getElementById("suma");
var igual = document.getElementById("igual");
var division = document.getElementById("division");
var multiplicacion = document.getElementById("multiplicacion");
var resta = document.getElementById("resta");
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById("cero");  
}


cero.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "0"; 
}

uno.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "1";  
}
dos.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "2"; 
}
tres.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "3"; 
}
cuatro.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "4"; 
}
cinco.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "5"; 
}
seis.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "6"; 
}
siete.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "7"; 
}
ocho.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "8"; 
}
nueve.onclick = function (e){
    calculadoraResultado.textContent = calculadoraResultado.textContent + "9"; 
}

reset.onclick = function(e){
    resetear(); 

}

suma.onclick = function (e){
    operandoa = calculadoraResultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function (e){
    operandoa = calculadoraResultado.textContent;
    operacion = "-";
    limpiar();
    
}

division.onclick = function (e){
    operandoa = calculadoraResultado.textContent;
    operacion = "/";
    limpiar();
   
}

multiplicacion.onclick = function (e){
    operandoa = calculadoraResultado.textContent;
    operacion = "*";
    limpiar();  
}

igual.onclick = function (e){
    operandob = calculadoraResultado.textContent;
    resolver();
     
}




function limpiar(){
calculadoraResultado.textContent = "";

}

function resetear(){
    calculadoraResultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        
        case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;

        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;

    }

    resetear();

        calculadoraResultado.textContent = res;
    
    
    

}

