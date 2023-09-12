// funciones en Javascript

//función sin parámetros y sin retornos
function saluda(){
    console.log('Holaa!');
}
saluda();

//función con parámetros y sin retornos
function addOne(num){
    console.log(`el ${ num } + 1 = ${ num + 1}`)
}
addOne(15);

//función sin parámetros y con retornos
function suma(num1, num2){
    return num1 + num2;
}
const result =suma(12, 34);
console.log(result);

//funciones como constantes
//funciones anónimas
const resta = function( num1, num2){
    return num1 - num2;
}
const resultado= resta(12, 2);
console.log(resultado);

//Funciones de Flecha Arrow Functions
(param1, param2)=>{
    //Code
    //return
}

const duplica=(num)=>{

}

const multiplica =(num1, num2)=> {
    console.log('Multiplica números');
    return num1 * num2;
}
const doble = duplica(16);
console.log(doble);

const resultM = multiplica(13,26);
console.log(resultM)

//Simplificando Arrow Fuctions
let cambiaMinusculas = (word)=>{
    return word.toLowercase();
}

//Si solo es un único parámetro se puede omitir parentesis
//Si la única línea es el return se pueden omitir llaves y return
cambiaMinusculas=word=>word.toLowercase();
