for (k=1; k<11; k++){
    vueltas = Math.floor(Math.random()*(11-5)+5);
    nro= Math.floor(Math.random()*(37-0)+0);
    total = vueltas * nro;
    num = total % 37;
    console.log("Nro de juego: "+k+"\n/valor aleatorio generado: "+total+"\nNro en el que cayo: "+nro+"\n")
    if (num==0){
        console.log("ganaste");
    }
}