var cumpleaños = new Date("May 11, 2024");
var hoy = new Date();


let resultado = (cumpleaños - hoy) / (1000 * 60 * 60 * 24);

console.log(resultado);