/* Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.
 Puedes usar este array para probar tu función */

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];
function averageWord(param) {
  // insert code
  let suma = 0;
  let caracteres = 0;
  for (let i = 0; i < param.length; i++) {
    if (typeof param[i] === "string") {
      console.log("entra en el else ", param[i], " ", param[i].length);
      suma += param[i].length;

      /* console.log('entra en el if ', param[i], 'index :',i)
        suma += Number(param[i])
        console.log ('suma es: ',suma) */
    } else {
      suma += param[i];
    }
  }
  return suma;
}

const resultado = averageWord(mixedElements);
console.log("El resultado de la suma de numeros y caracteres albéticos es : ",resultado);

