//? reduce

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// numList.forEach((item, index, array) => {
//   sum = sum + item;
// });
// console.log(sum);
// const total=numList.reduce((sum, item, idex, array) => {
//   sum = sum + item;
//   return sum;
// }, 0);
// console.log(total);
const total=numList.reduce((product, item, idex, array) => {
    product = product * item;
    return product;
  }, 1);
  console.log(total);
