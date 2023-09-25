//Strings
const firstName ='Ignacio';
const lastName ='Franco';
const fullName =firstName + "" + lastName;

console.log("I'm" + firstName);
console.log('I\'m' + firstName);

console.log(fullName);

//Strings Multilínea
const menu= `
elige:
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;
console.log(menu);

//Strings Templates
//placeholder ${}

const city ='Apizaco';
const phone = '2411903372';
const rol ='Alumno';

const  presentation =`
Holaa
Soy ${ fullName }, ${ rol } en la UTT
Vivo en ${ city }
Te puedes comunicar conmigo en ${ phone }
`;
console.log(presentation);
