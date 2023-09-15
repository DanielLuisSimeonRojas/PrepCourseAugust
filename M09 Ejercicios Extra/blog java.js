function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
    
   var partido = frase.split(" ");
   var rever = [];
//   console.log(partido)
  for(i = 0; i< partido.length; i++){
    rever.push( partido[i].split("").reverse().join(""));
    // console.log(rever)
  }
  var final = rever.join(" ");
//   console.log(final)
  return final;
}

 asAmirror("The Henry Challenge is close!")


 function numberOfCharacters(string) { //string, recorrer - return {} // propiedad = letras del string
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var objeto = {};
  for(i = 0; i < string.length; i++){
    if(!objeto[string[i]]){
      objeto[string[i]] = 0;
      objeto[string[i]]++;
    } 
    objeto[string[i]]++;
    objeto[string[i]] = 0;
  } 
  console.log(objeto)
}
numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda");