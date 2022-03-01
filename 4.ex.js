/* Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */


const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
 let suma = 0;
 let promedio = 0;
 for (let i = 0 ; i < param.length; i++){
    suma += param[i];
    promedio = suma / param.length;
}
   return promedio
  
}
  
const resultado = average (numbers);
console.log ('el valor promedio es :', resultado );


