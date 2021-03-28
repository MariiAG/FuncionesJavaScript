let TemperaturaMaxima = [20, 30, 40, 35, 25, 42];
let TemperaturaMinima = [2, 8, 10, 5, 6, 15];
let totalTemperaturaMaxima = 0;
let totalTemperaturaMinima = 0;
let dia = 1;

//funcion tradicional
function calcularTemperatura (TemperaturaMaxima, TemperaturaMinima){
    return (TemperaturaMaxima + TemperaturaMinima) / 2;
}

//funcion flecha
let calcularTemperatura = (TemperaturaMaxima, TemperaturaMinima) => (TemperaturaMaxima + TemperaturaMinima) / 2;
console.log("MEDIA DE TEMPERATURA\n Luna de Endor\n Dia " + dia + " : °c " + calcularTemperatura(TemperaturaMaxima[dia], TemperaturaMinima[dia]));