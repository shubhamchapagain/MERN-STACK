//? object
//? key value pair
//? collection of primary data type

const studentDetails={}
console.log(studentDetails,typeof studentDetails);

const obj1={}
const obj2={}
console.log(obj1===obj2)//? false

// let student1={
//     firstname:"Rohan",
//     lastname:"Thakuri",
//     isGraduated:true,
//     permanentAddress:"Kathmandu",
//     temporaryAddress:"Chitwan",
// };//? created the object called student1
// console.log(student1)
// console.log(`My name is ${student1.firstname}`)

// //? access technique

// //? dot operator
// console.log(student1.permanentAddress)
// console.log(student1.firstname)

// //? square bracket operator
// //? must stringify i.e convert key to string
// console.log(student1["isGraduated"]);
// console.log(student1["lastname"]);

//? CRUD 
//? C=Create/Add
//? R=Read/Retrieve
//? U=Update/Edit
//? D=Delete/Remove

let student12={
    firstname:"Rohan",
    lastname:"Thakuri",
    isGraduated:true,
    Address:{
      permanentAddress:"Kathmandu",
      temporaryAddress:"Chitwan",
    },
};
console.log(student12.Address.permanentAddress)
console.log(student12["Address"]["permanentAddress"]);
console.log(student12.Address["temporaryAddress"]);

//?Update/Insert
student12.firstname="Smarika";
student12.age=23;
console.log(student12)

let nationDetail=
{
    name:"Nepal",
    population:"30 million",
    perCapita:1400,

};
//? delete
console.log(nationDetail)
// delete nationDetail.perCapita;
// console.log(nationDetail)
const cupDetails={
    name:"watercup",
    brand:"Milda",
    color:"Green",
    name:"Tea cup"//? the last name is priority
    
};
console.log(cupDetails)


