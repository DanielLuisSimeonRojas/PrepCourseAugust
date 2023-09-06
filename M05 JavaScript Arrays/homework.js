/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

const { areaDelTriangulo } = require("../M03 JavaScript Fundamentos/Ejercicio 05");

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (i = 0; i < array.length; i++){
      array[i] = array[i] + 1;
   }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   // array[array.length] = elemento;
   // return array;
   array.push(elemento);
   return array;
   // return array.push(elemento);
}


function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabra = palabras[0];
   for (i = 1; i < palabras.length; i++){
      palabra = palabra + " " + palabras[i];
   }
   
   return palabra;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
//    for(i = 0; i < array.length; i++){
//       if(elemento === array[i]) return true;
// } return false;
   
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   // var suma = arrayOfNums[0];
   // for(i = 1; i < arrayOfNums.length; i++){
   //    suma = suma + arrayOfNums[i];
   // } return suma;

   var total = arrayOfNums.reduce(function(acumulador, elemento){
      return acumulador + elemento;
   })
   
   return total;
   
}



// var palabra = "Henri";
// var palabraSeparada = palabra.split("");
// palabraSeparada.pop();
// palabraSeparada.push("y");
// var palabraArreglada = palabraSeparada.join("");
// console.log(palabraArreglada);

// var arreglo = [1, 2 , 3 , 4];
// var numerosDiferentes = arreglo.forEach((x) => {
//    if(x !== 2){
//       console.log(x)
//    } 
// })
// console.log (numerosDiferentes)

// var masUno = arreglo.map((x) => {
//    // if(x !== 2){
//    //    x = x + 1
//       return x * 2;
//    // }
// })
// console.log(masUno)


function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // var promedio = resultadosTest[0];
   // for(i = 1; i< resultadosTest.length; i++){
   //    promedio = promedio + resultadosTest[i];
   // } promedio = promedio / resultadosTest.length;
   // return promedio;
   return agregarNumeros(resultadosTest) / resultadosTest.length


}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   // var grande = arrayOfNums[0];
   // for(i = 1; i < arrayOfNums.length; i++){
   //    if(grande < arrayOfNums[i] ){
   //       grande = arrayOfNums[i];
   //    } else {
   //       grande = grande;
   //    }
   // } return grande;

//   var grande = arrayOfNums.reduce(function(x, y){
//    if (x > y){
//       return x;
//    } else{return y;}
//   })
//   return grande;

//   function comparación(x, y){
//    if(x > y) return x;
//    else return y;
//   }



   return Math.max(...arrayOfNums);

   // for(i = 0; i < arrayOfNums.length; i++){
   //    if(arrayOfNums[i] > arrayOfNums[i+1]){
   //       return arrayOfNums[i];
   //    } 
   // }
   

}



// function total(arr) {
//    return arr.reduce(function(x, b){
//       if(x > b){
//          return x;
//       } else { return b};

//    })
// }

// console.log(total([10,500,30, 100, 410, ])); // 6


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var producto = 1;
   if(arguments.length >= 1){
      for(i = 0; i< arguments.length; i++){
         producto = producto * arguments[i];  
      } return producto;
   } else {
      return 0;
   }

   // var producto = arguments.reduce(function(x, y){
   //    if (arguments.length > 1) return x * y;
   //    else if(arguments.length === 1) return arguments[0];
   //    else return 0; 
   // }); 
   // return producto;
   

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   // var nuevo = [];
   // for (i = 0; i < array.length; i++){
   //    if (array[i] > 18) {
   //       nuevo.push(array[i]);
   //    }
   // } return nuevo.length;

   var contador = 0;
   for (i = 0; i < array.length; i++){
      if(array[i] > 18){
         contador++;
      }
   } return contador;


}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
   else return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var str = num.toString();
   // if(str[0] === "9") return true;
   // else return false;
   
   if(str.charAt(0) === "9") return true;
   else return false;


}




function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   // function iguales (x, y){
   //    if(x === y) return x;
   //    else return false;
   // }
   // var final = array.reduce(iguales);
   // if(final !== false) return true;
   // else return final; 

   for(i=0; i< array.length; i++){
      if(array[i] === array[i+1]) return true;
         else return false;
   }
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

   var nuevo = [];   
   for(i = 0; i < array.length; i++){
      if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre" ){
         nuevo.push(array[i]);
      }
   }
   
   if (nuevo.length === 3) return nuevo;
   else return "No se encontraron los meses pedidos";

   // if(array.includes("Marzo" && "Noviembre"&& "Enero") === true) return ["Marzo", "Noviembre", "Enero"];
   // else return "No se encontraron los meses pedidos";


   // var meses = [];
   

   // for(i = 0; i < array.length; i++){
   //    if(array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
   //        meses.push(array[i]);
   //    } else{meses;}
   // } 

   // var comprobar = (meses) => meses == "Enero" && meses == "Marzo" && meses == "Noviembre";

   // if (meses.includes("Enero" && "Marzo" && "Noviembre") === true) return meses;
   //  else return "No se encontraron los meses pedidos";


   

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

      // var seis = [];
      // for (i = 0; i <= 10; i++){
      // seis.push(6 * i);
      // }
      // return seis;

   var seis = [];
   var contador = 0;
   while(contador <= 10){
      seis.push(6*contador);
      contador++;
   } 
   return seis;
  
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   // var seis = [];
   // for(i = 0; i < array.length; i++){
   //    if(array[i] > 100 && array[i] <= 200){
   //       seis.push(array[i]);
   //    } else {seis;}
   // } return seis;

   // (x) => x > 100
   var nuevo = array.filter((x) => {
      if(x > 100) return x;
   });

   return nuevo;

   // function(x){
   //    if(x > 100) return x;
}



/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var nuevo = [];
   for (i = 0; i < 10; i++){
      num = num + 2;
      if(num === i) break;
      nuevo.push(num);
   }
   if(nuevo.length < 10) return "Se interrumpió la ejecución";
   return nuevo;

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var nuevo = [];
   for (i = 0; i < 10; i++){
      if(i === 5) continue;
      num = num + 2;
      nuevo.push(num);
   }
   return nuevo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
