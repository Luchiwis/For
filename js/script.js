/*
Ejercicio 1: Imprimir números pares
*/
// CODIGO
for(let n=2; n<=20; n=n+2){
  console.log(n)
} 
/*
Ejercicio 2: Sumar números del 1 al 50
*/
// CODIGO
let resultadoSuma = 0;

for (let i = 1; i <= 50; i++) {
  console.log(resultadoSuma);
  resultadoSuma += i;
}
/*
Ejercicio 3: Imprimir elementos de un arreglo
*/
// CODIGO
let nombres = ["Juán", "Carlos", "Felipe", "María", "Ana", "Pedro"]

for(let i=0; i<nombres.length; i++){
  console.log(nombres[i])
}
/*
Ejercicio 4: Tabla de multiplicar
*/
// CODIGO
const numero = prompt("Ingrese un número:");

console.log("Tabla de multiplicar del" + numero);
for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}
/*
Ejercicio 5: Contar letras en un string
*/
// CODIGO
const frase = "Esta es la mejor frase que vas a haber leído en tu vida.";
const letra = "e";
let contador = 0;

for (let i = 0; i < frase.length; i++) {
  if (frase[i].toUpperCase() === letra.toUpperCase()) {
    contador++;
  }
}

console.log("La letra " + '"'+ letra+'" aparece ' + contador + " veces en la cadena.");
/*
Ejercicio 6: Traducir este codigo para que funcione solo con ciclos For:
*/
// const numeros = [2, 3, 5, 7, 10];
// let sumaCuadrados = 0;
// let i = 0;

// while (i < numeros.length) {
//   sumaCuadrados += numeros[i] * numeros[i];
//   i++;
// }

// console.log("La suma de los cuadrados es:", sumaCuadrados);

const numeros = [2, 3, 5, 7, 10];
let sumaCuadrados = 0;

for(let i=0; i<numeros.length; i++){
  sumaCuadrados+= numeros[i] * numeros[i];
}

console.log("La suma de los cuadrados es: " + sumaCuadrados);