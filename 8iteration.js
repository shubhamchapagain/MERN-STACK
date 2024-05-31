//? iteration
//? for loop


//? syntax
//? for (initial_value;condition;increment/decrement)
    //? some code here
// for(let i=1;i<=10;i++)
//     {
//         console.log(i)
//     }

//? waf to print numbers from 100 to 60
// for(let i =100;i>=60;i--)
//     {
//         console.log(i);
//     }
//? waf to find a number is prime or nor
let n=1000;
let isPrime = true;
for (let i =2;i <n;i++)
{
    let rem=n%i;

    if(rem===0){
        isPrime=false;
        break;
    }
}
console.log(isPrime ?  "prime number" : "composite number")


//? while loop
//? syntax
//? initial value
//? while (condition)
   //? {
       //? some code here
    //? increment decrement
//? }
// let p=1;
// while (p<=10)
//     {
//         console.log("Shubham");
//     p++;
//     }

//? do while
// do{
//     // ? some code here
//     //? increment/decrement
// }while(condition)

let m=1
do{
    console.log("Seattle")

    m++;
}while(m<=6);

