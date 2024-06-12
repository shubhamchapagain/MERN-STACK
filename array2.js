//? map,filter,find,findIndex,reduce
//? loop based
// let studentList = ["Saugat", "Shubham", "Smarika", "Unik", "Smriti", "Utsarga"];
// studentList.map((item, index, array) => {
//   console.log(item, index, array);
// });
//? map => it return new array
//? to alter the values of array
//? original array length === returned array length

// const newStudentList= studentList.map((item,index,array)=>{
//     return 0;
// });
// console.log(newStudentList)

// const newStudentList1=studentList.map((item,index,array)=>{
//     let uppercaseName=item.toUpperCase();
//     return uppercaseName;

// });
// console.log(newStudentList1)

// const priceList=[25,34,56,22,38,97,100];
// //? increase price of every item by 3 dollar
// const newPriceList=priceList.map((item,index,array)=>{
//     let increasedItem=item+3;
//     return increasedItem;
//     //? SAME CODE
//     //? const newPriceList=priceList.map((item)=>item+3);
// });
// console.log(newPriceList);
//? array of object
const productList=[
    {
        id:1,
        name:"Night Vision Glass",
        Price:4,
    },
    {
        id:2,
        name:"Gloves",
        Price:5,
    },
    {
        id:3,
        name:"Helmet",
        Price:24,
    },

];
//? increase price by 10%
// const newPrice=productList.map((item,index,array)=>{
//     let increasedPrice=item.Price+0.1*item.Price;
     
//    return {
//         ...item,
//        //?id=item.id,
//        //?name=item.name,
//         Price:increasedPrice,
//     }

// });
// console.log(newPrice);
//? find all items whose price is less than 10
const newPrice=productList.filter((item,index,array)=>{
   return item.Price<10;
});
console.log(newPrice)