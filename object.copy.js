//? object copy

const print =(values)=>{
    console.log(values)
};

const student1={
    name:"Sandeep",
    college:"KEC",
    isGraduated:false,
    image:null,
    address:{
        permanent:"x",
        temporary:"y",
    }
}
//?print(student1)
//? shallow copy
// const student2=student1;
// console.log(student2)
// student2.name="Kalyan";
// console.log(student1)
// console.log(student2)
//? we havenot changed anything in student2 still it shows change 

//?spread operator(...)
// const student2={...student1};
// student2.name="suyasha"
// console.log(student2);

//? but in case of nested object it wont work it changes
//? deep copy
// structured clone

const student2=structuredClone(student1);
student2.address.permanent="z"
console.log(student1)
console.log(student2)