/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   // var arreglo = [];
   // var arregloDe = arreglo.map((elemento) => {elemento = [];
   // arreglo.push(elemento)});

   var topArray = Object.entries(objeto);
   return topArray;

   
}

function numberOfCharacters(string) { //string, recorrer - return {} // propiedad = letras del string
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var objeto = {};
    for(i = 0; i < string.length; i++){
        //pregunta si la letra "string[i]" esta creada en "objeto{}"
        if(!objeto[string[i]]){
            objeto[string[i]] = 0; // crea la clave y le pone valor 0
        } objeto[string[i]]++;   //aumenta en uno el valor de la clave existente
    }
    var ordenado = Object.keys(objeto).sort();
    var ordFinal = {};
    for(i = 0; i < ordenado.length; i++){
      ordFinal[ordenado[i]] = objeto[ordenado[i]];
    }
    return ordFinal;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   var mayus = "";
   var min = "";

   for(i = 0; i < string.length; i++){
      if(string[i] === string[i].toLowerCase()){
         min = min + string[i];
      } else {
         mayus = mayus + string[i];
      }
   }
   return mayus + min;

}




function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   var nuevoString = [];
   var array = frase.split(" ");
   // console.log(array)
   for(i = 0; i< array.length; i++){
      nuevoString[i] = array[i].split("").reverse().join("")
   }
   // console.log(nuevoString)
   var final = nuevoString.join(" ")
   // console.log(final)
   return final;
   
}

// asAmirror("The Henry Challenge is close!")

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var nuevo = numero.toString();

   for(i = 0; i < nuevo.length; i++){
      for(j = nuevo.length-1; j >= 0; j--){
         if(nuevo[i] == nuevo[j]) {
            console.log(nuevo[i])
            return "Es capicua";
         } else return "No es capicua";
      }
   } 


}

// capicua(12321)

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var sin = "";
   var con = "";
   for(i = 0; i < string.length; i++){
      if(string[i] == "a" || string[i] == "b" || string[i] == "c"){
         sin = sin + string[i];
      } else con = con + string[i];
   }
   return con;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var nuevoArreglo = [];
   
   for(i = 0; i < arrayOfStrings.length -1; i++){
      if(arrayOfStrings[i].length <= arrayOfStrings[i+1].length){
        nuevoArreglo.push(arrayOfStrings[i]);
      }else nuevoArreglo.push(arrayOfStrings[i+1]);
   }
   console.log(nuevoArreglo)
   return nuevoArreglo;
   
   // var final = arrayOfStrings.sort(function(a, b){
   //    return a.length - b.length;
   // })
   // console.log(final)
   // return final;

}

sortArray(["You", "are", "beautiful", "looking"] )

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
