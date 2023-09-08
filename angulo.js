posicionInicial = Math.floor(Math.random() * 360);
vueltas = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
a=Math.floor(Math.random()*(360-0)+0) * vueltas + posicionInicial;
anguloFinal = a % 360;
console.log("Posición o ángulo Inicial G.A.: " + posicionInicial);
console.log("Valor Aleatorio Generado en Grados: " + a);
console.log("Ángulo Final: " + anguloFinal);