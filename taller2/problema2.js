let stealBlueprints = (idBlueprints, getAway) => {
    if(idBlueprints <= 10 && idBlueprints > 0){
        getAway("Se a robado el plano #" + idBlueprints + "\n|--Con éxito--| \n¡¡ FELICIDADES ¡¡", true);
    }else{
        getAway("Se a robado el plano #" + idBlueprints + "\n¡ OH NO, has robado un plano falso ¡", false);
    }
}
stealBlueprints(2, getAway = (message, boolean) =>{
    if(boolean == true){
        console.log(message + "\n" + "Despegando...");
    }else{
        console.log(message + "\n" + "Cancelando despegue...¡¡");
    }
})