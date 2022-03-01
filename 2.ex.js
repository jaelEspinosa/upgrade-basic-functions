/* Completa la función que tomando un array de strings como argumento devuelva el más largo,
 en caso de que dos strings tenga la misma longitud deberá devolver el primero */

 const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
  let largeName = 0;
      for (let i=0; i<avengers.length;i++) {
          console.log (i);
          if(i === 0){
              console.log ('entra en el primer if')
              console.log(avengers[i].length, avengers[i])
              largeName=param[i]
          }else{
              
            if(param[i].length > param[i-1].length){
                largeName = param[i];
            }else{
                console.log('entra en el else',param[i].length)
                largeName=param[i-1];
                console.log('largeName es', largeName)
            }

          }
         

      }
    return(largeName);
}

const resultado = findLongestWord(avengers);
console.log ('El nombre mas largo del Array es: '+ resultado);
