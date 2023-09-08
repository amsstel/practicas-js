hora = Math.floor(Math.random() * (24 + 0)) + 0
minutos = Math.floor(Math.random() * (60 - 0)) + 0;
minutosAleatorios = Math.floor(Math.random() * (601 - 300)) + 300;
horasAdicionales = Math.floor(minutosAleatorios / 60);
minutosFinales = minutos + (minutosAleatorios % 60);
horaFinal = hora + horasAdicionales;
if (minutosFinales >= 60) {
  horaFinal += 1;
  minutosFinales -= 60;
}
if (horaFinal >= 24) {
  horaFinal -= 24;
}
console.log("Hora Actual: " + hora + ":" + minutos);
console.log("Valor Aleatorio Generado en Minutos: " + minutosAleatorios);
console.log("Hora Final: " + horaFinal + ":" + minutosFinales);

