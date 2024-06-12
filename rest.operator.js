//? rest operator
//(....)
const getSum = (a, b,...othervalues) => {
    
  let sum = a + b;//? a+b+c+d+e+f garnu bhanda
  return sum;
};
const result = getSum(1, 2,3,4,5,6);
console.log(result);
