//? methods in array
//? push,pop,shift,unshift,reverse,includes
//? push==> to add element(s) to the end of array
//? pop==> to remove element from the end of array
// const numList = [10, 12, 13, 14];
// numList.push(15);
// console.log(numList);
// numList.push(18, 19);
// console.log(numList);
// numList.pop();
// console.log(numList);

//? shift and unshift
//? to move the first item from array
//? unshift: to add item(s) at starting of node

// const studentList = ["Saugat", "Shubham,", "Smarika", "Smriti"];
// studentList.shift();
// console.log(studentList);
// studentList.unshift("Suyasha","Utsarga","Saurav");
// console.log(studentList)

//? reverse=> reversing the order of items in array
// const priceList = [12, 13, 56, 76];
//priceList.reverse();
//?console.log(priceList)
// const newpriceList = priceList.toReversed();
// console.log(newpriceList);
//? included

//? checks whether array contains specific value or not
//? returns in boolean i.e true or false

// const colleges = ["KEC", "HCOE", "Pulchowk"];
// const results=colleges.includes("KEC");
// console.log(results)

// const userRoute = "/user/edit/1";
// const result = userRoute.includes("user");
// console.log(result);
//? slice==> it does not change original array
//? to get portion of array from array
// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// const newList = animals.slice();
// console.log(newList);
// newList[0] = "rhino";
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));

//? splice
//? remove or replace existing items
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
// months.splice(3);
// console.log(months)
// console.log(months.splice(2,2))
// months.splice(1,0,"Dec")
// console.log(months)
// months.splice(6, 0, "nov", "oct");
// console.log(months);

//? sort
let studentList = ["Saugat", "Smriti", "Agrim", "Unik", "Prajwol", "Dipesh"];
studentList.sort();
console.log(studentList);
studentList.sort().reverse();
console.log(studentList);

let numList = [
  1, 234, 542, 23, 43, 678, 98, 54, 324, 6547, 34, 22, 33, 4, 5, 6123, 993,
];
// numList.sort()
// console.log(numList)
 numList.sort((a,b)=>a-b);//? ascending sort
console.log(numList)
numList.sort((a,b)=>b-a);//? descending sort
console.log(numList)