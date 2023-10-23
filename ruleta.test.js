result=(Math.floor(Math.random() * (370 - 185 + 1) ) + 185)%37;
for (let i=1;i<=10;i++){
numDeJuego=i}
posInicial=((Math.floor(Math.random() * (370 - 185 + 1) )+185));

//ValorAleatorio cuyo valor debe estar entre 37*5 y 37*10

test('posicion inicial',()=>{
    expect(posInicial).toBeGreaterThanOrEqual(37*5);
    expect(posInicial).toBeLessThanOrEqual(37*10);
})

//NroEnLaRuleta que debe estar entre 0 y 36.


test('numero de posicion final ', () => {
    expect(result).toBeLessThanOrEqual(36);
    expect(result).toBeGreaterThanOrEqual(0);
}); 

//NroDeJuego cuyo valor debe ser mayor 1 y menor a 10, y ser igual a NroDeJuegoAnterior+1, donde el numero de juego anterior puede ser inicializado en forma manual.

test('numero de juego',()=>{
    expect(numDeJuego).toBeLessThanOrEqual(10);
    expect(numDeJuego).toBeGreaterThan(0);
})