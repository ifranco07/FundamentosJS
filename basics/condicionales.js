//Condicionales
//if (exp) {}
const age = 18;
if(age >=18 ){
    console.log('Es Mayor');
}
//if (exp) {} else {}
if(age >=18 ){
    console.log('Es Mayor');
}else{
    console.log('Es Menor');
}
//If ternario  (exp)? true: false;
(age >= 18)? console.log('Es Mayor'): console.log('Es Menor');

//if (exp) {} else if(exp) else{}
const ppt = Math.random();
if(ppt > 0.33){
    console.log('Cayó Piedra');
}else if(ppt < 0.66){
    console.log('Cayó papel');
}else {
    console.log('Cayó Tijera');
}
//Switch / case
const day = Math.ceil(Math.random() * 7)
switch(day){
    case 1:
        console.log('Es Domingo');
        break;
    case 2:
        console.log('Es Lunes');
        break;
    case 3:
        console.log('Es Martes');
        break;
    case 4:
      console.log('Es Miércoles');
      break;
    case 5:
        console.log('Es Jueves');
        break;
    case 6:
        console.log('Es Viernes');
        break;
    case 7:
        console.log('Es Sabado');
        break;
}
//Truthy and Falsy
const numOfStudent = 0;
if (numOfStudent ===0){
    console.log('No hay alumnos');
} else {
    console.log(`Hay ${ numOfStudent } alumnos`);
}

if(numOfStudent){
    console.log(`Hay ${ numOfStudent } alumnos`);
} else {
    console.log('No hay alumnos');
}

const usuario = '';
const invitado = usuario || 'Desconocido';

console.log(invitado);
