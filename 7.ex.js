/* Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
comprueba si existe el elemento, en caso que existan nos devuelve un true
 y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función: */

 const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param,busqueda) {
    // insert code
      //  console.log(param)
    for (let i = 0; i < param.length ; i++) {
       // console.log(param[i],' ', i)
        if (param[i] === busqueda ){
            result = 'El elemento, '+ busqueda + ' existe. Esta en la posicion: ' + i
            return result
        }else{
            result = 'Elemento, '+ busqueda +' NO encontrado'
        }
    }
    return result
  }
    
  const resultado = finderName(nameFinder,'Jessica')
  console.log(resultado)
  

   