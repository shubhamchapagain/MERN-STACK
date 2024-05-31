//? function
//? DRY=DO NOT REPEAT YOURSELF
//? code reusability,to reduce code redundancy,single point of failure

//? SYNTAX
//? function function_name()
//?{
    //? some code here
//?}
// function sayHello(){
//     console.log("Hello");
// }
// sayHello();

// function sayHello(stName){
//     console.log(`Hello ${stName}`);
// }
// sayHello("Shubham");
// sayHello("Smarika")

// function getSum(x,y){
//     let sum=x+y;
//     console.log(sum)
// }
// getSum(2,6);

// function getSum(x,y)
// {
//     let sum=x+y;
//     return sum;
// }
// console.log(getSum(2,4));

//? arrow function
// ()=>{};//? how to call this
// const sayHi =() => {
//     console.log("Hi");
// };
// sayHi();
// const sayHi =(stName) => {
//     console.log(`Hi ${stName}`);
// };
//  sayHi("suyasha");
// const sayHi =(stName ="user") => {
//      console.log(`Hi ${stName}`);
//  }
// sayHi();
// const doSum=(x,y)=>{
//       x=Number(x);
//       y=Number(y);
//     console.log(x+y);
// }
// doSum("3","8");


// const doProduct =(v,y)=>v*y


// const productresult = doProduct(7,8)
// console.log(productresult)

//? WAF to show whether the no is odd or even
// const checkODDEVEN=(x)=>{
//     let temp= x% 2;
//     let ans;
//     if(temp===0)
//      ans= "even";
// else{
//     ans="odd"
// }
// return ans;
// }
// const result = checkODDEVEN(32);
// console.log(result);

// const isOddeven=(num)=>(num%2 ==0?"even":"odd");
// const result=isOddeven(67);
// console.log(result)

//? waf to check polarity of number

const checkPolarity=(num)=>{
    let ans;

    if(num>0){
        ans="positive"
    }
    else if(num<0){
        ans="negative"
    }
    else{
        ans="zero"
    }

    return ans;
}
const result=checkPolarity(-23);
console.log(result)

//? const checkPolarity=(num)=>(num >0?"positive":num<0?"negative":"zero");
//?console.log(checkPolarity(0))




