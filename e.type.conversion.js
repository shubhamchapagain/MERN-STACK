//? type conversion from one type to other type


//? string to number conversion
// const x="48";//? numeric string
// const y=Number(x);
// const z =+x;
// console.log(y,typeof y);
// console.log(z,typeof z);

//? old way of doing same thing
//? parseInt , parseFloat

const m="11";
const n = parseInt(m);
console.log(n,typeof n);
//? suppose we input 11abc in m parseint will give number as output as 
const x="11.22";
const y = parseInt(x);
console.log(y,typeof y);


//? to string conversion

// const isMarried = true;
// console.log(isMarried,typeof isMarried);

// const isMarried = String(true);
// console.log(isMarried,typeof isMarried);

//? template literal 
// const userName="Smriti";
// console.log("HI,I am",userName,".");

//? string concatenation
// console.log("2"+"3");
// console.log("hi i am "+userName+".");

// console.log(`hi i am ${userName}.`);
const d=12;
const e=`${d}`;
console.log(e,typeof e);




