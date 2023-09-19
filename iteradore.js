const fruit = ['apple', 'orange', 'melon', 'watermelon'];

console.log('for');

//recorrido con for
for (let i=0; i < fruit.length; i++){
    console.log(fruit [i]);
}

console.log('for of');
//recorrido con for of 
for(const fruit of fruit){
    console.log(fruit);
}

//Iteradores dde Arrays
//forEach()
console.log('forEach con arrow function');
fruit.forEach(
    function (fruit){
        console.log(fruit);
    }
);

fruit.forEach(
    (fruit)=>{
        console.log(fruit);
    }
);

fruit.forEach(fruit => console.log(fruit));

//map
//Itera un array y genera uno nuevo a partir del original

const numbers = [1, 2, 3, 4, 5, 6, 7];

const squares = numbers.map(num => num ** 2);
/* 

*/

console.log(numbers);
console.log(squares);

//filter
//Itera un array y regresa uno nuevo con valores que cumplan
//condición

const mayores = numbers.filter(num => num >4);

/**
 (num) => {
    if(num > 4){
        return num;
    }
 }
 */

 console.log(numbers);
 console.log(mayores);

 // reduce
 //regresa a un único valor a partir de los valores de un array

 const sumatoria = numbers.reduce((a, b) => a + b);
 const fact  = numbers.reduce((a, b) => a * b);

 console.log(numbers);
 console.log(sumatoria);
 console.log(fact);

 const minusculas = 'abcdefghi'.split('');

 mayusculas = minusculas.map(letra => letra.toUpperCase());

 console.log(minusculas);
 console.log(mayusculas);

 //some
 //Regresa True si al menos uno de los elementos cumplen

 const equalTo5 = numbers.some(num => num === 15);
console.log(equalTo5);
