//? find
//? finds first item in array which satisfies the condition
//? it returns value not array
//? if any item does not satisfy condition,it returns undefined

// const numList=[22,13,34,56,-67,31,20,21];
// //? find item greater than 20
// const value =numList.find((item,index,array)=>{
//     return item>20;
// })
// console.log(value)
const userList=[
   {
    id:1,
    name:"Smriti",
    email:"smi@gmail.com"
   },
   {
    id:2,
    name:"Shubham",
    email:"suv@gmail.com"
   },
   {
    id:3,
    name:"Utsarga",
    email:"uttu@gmail.com"
   },
   {
    id:4,
    name:"Smarika",
    email:"sma@gmail.com"
   },
   {
    id:5,
    name:"Saugat",
    email:"saugu@gmail.com"
   },

];
//? find whose mail is uttu@gmail.com

// const newUser=userList.find((item,index,array)=>{
//     return item.email==="uttu@gmail.com"
// });
// const newUser=userList.find((item,index,array)=> item.email==="uttu@gmail.com"
   
// );
// console.log(newUser)

//? find index
const newUser=userList.findIndex((item,index,array)=> item.email==="uttu@gmail.com"
   
 );
 console.log(newUser)
