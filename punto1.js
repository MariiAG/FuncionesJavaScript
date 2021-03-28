let xfinal = 70;
let yfinal = -50;
let xinicial = 0;
let yinicial = 0;

//funcion tradicional
function calcularDistancia(xinicial, yinicial, xfinal, yfinal){
    return Math.sqrt((Math.pow((xfinal-xinicial), 2)) + (Math.pow((yfinal-yinicial), 2)));
}

// funcion flecha
let calcularDistancia = (xinicial, yinicial, xfinal, yfinal) => Math.sqrt((Math.pow((xfinal-xinicial), 2)) + (Math.pow((yfinal-yinicial), 2)));

console.log(calcularDistancia(xinicial, yinicial, xfinal, yfinal));