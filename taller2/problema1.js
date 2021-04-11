// PROGRAMACIÓN AVANZADA taller #2
let enterApprentice = (name, planet, age, height, identify) => {
    let padawan = [name, planet, age, height];
    identify(padawan);
}
enterApprentice('Leia', 'marte', 20, 170, aprendiz = padawan => {
    if(padawan[2] < 15){
        console.log("Padawan " + padawan[0] + " aprendera el MANEJO DE LA FUERZA");
    }else{
        console.log("Padawan " + padawan[0] + " aprendera el MANEJO DEL SABLE DE LUZ");
    }
})