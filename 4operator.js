// ? operator ,a symbol which has certain meaning


//? arithmetic operator
//? assignment operator
//? comparison operator
//? logical operator

//? arithmetic operator
// ? +,-,*,/,**,%
//? x+2=6
console.log(2+7);
console.log(4-2);
console.log(3*3);
console.log(7/4);
console.log(2**3);// ? power 
console.log(10%3);
console.log(Math.ceil(23/2));
console.log(Math.pow(2,3));


//? assignment operator
//? =
let x=2;
//? =,+=,-=,*=,/=,**=,%=
let w=8;
//w=w+2;
w += 2 ; //?same
console.log(w);
let num=32;
num %=2;
console.log(num);


//? Comparison operator
//? ==,===,!=,!==,<,>,<=,>=
//? result always in boolean
let m=2;
let n='2';
console.log(m==n);//? checks only the data
//? == is weak comparison but === is strict comparison i.e value + data type
console.log(m===n)//? checks both the value and datatype so highly recommended
let s='SHUBHAM';
let p='shubham';
console.log(s.toLowerCase===p.toLowerCase);
console.log('SMARIKA'.toLowerCase());
console.log(3>=1);

//? Logical Operator

//? AND &&
//? OR ||
//? NOT !
console.log(true && false);
console.log(true || false);
let condition1 =3>4; //? false
let condition2='nepal'==='Nepal';//? false
console.log(condition1&&condition2);
console.log(condition1||condition2);
console.log(!condition1);












