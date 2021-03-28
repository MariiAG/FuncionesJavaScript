let nave1 = "ARQ2555: Sara Bel-Sun";
let nave2 = "ARQ2556: Nodin Chavdri";
let nave3 = "ARQ2557: Finn";

//funcion tradicional
function clasificarNave (nave1){
    let separarNombre = nave1.split(": ");
    return separarNombre[1];
}

//funcion flecha
let clasificarNave = nave1 => {
    let separarNombre = nave1.split(": ");
    return separarNombre[1];
}

console.log(clasificarNave(nave1));
