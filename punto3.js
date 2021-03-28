let TemperaturaMaxima = [20, 30, 40, 35, 25, 42];
let TemperaturaMinima = [2, 8, 10, 5, 6, 15];
let totalTemperaturaMaxima = 0;
let totalTemperaturaMinima = 0;
total = 0;

//funcion tradicional
function calcularTemperatura (TemperaturaMaxima, TemperaturaMinima){
    for(i = 0; i <= TemperaturaMaxima.length; i++){
        totalTemperaturaMaxima = totalTemperaturaMaxima + TemperaturaMaxima[i];
        totalTemperaturaMinima = totalTemperaturaMinima + TemperaturaMinima[i];
        total = (totalTemperaturaMaxima + totalTemperaturaMinima) / (TemperaturaMaxima.length*2);
        return total;
    }
}
console.log(calcularTemperatura(TemperaturaMaxima, TemperaturaMinima));