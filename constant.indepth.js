//? constant
//? which cannot be reassigned
// const x=7;
// x=9;
//? mutation==> process of having change
//? mutate==> to change
//? mutable==>changeable
//? immutable==>unchangeable
//? primary data type ==> cannot be reassigned,thus immutable
//? Non primary data type==> cannot be reassigned,but mutable

// const isDeveloped=false;
// isDeveloped=true;//?it cannot be changed 

// const phoneDetails={
//     brand:"Samsung",
// }
// phoneDetails.brand="Apple"
// console.log(phoneDetails)
// phoneDetails=true;//? constant cannot be reassigned 


// const obj1=Object.freeze({
//     name:"ROHAM",
// });
// obj1.name="roshna"
// console.log(obj1)

//? TODO AFTER ARRAT
const obj1={
    name:"A",
};
const obj2={
    name:"A",
};
console.log(Object.keys(obj1))
console.log(Object.values(obj1))

