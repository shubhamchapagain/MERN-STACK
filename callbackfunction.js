//? function which is passed as an argument to another function
//? is called call back function

const getSum = (x, y, func) => {
  let sum = x + y;
  func(sum);
};
getSum(4, 5, (value) => {
  console.log(value);
});
//? function returning 
