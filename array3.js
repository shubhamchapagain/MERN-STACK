//? filter (there is some condition to satisfy)
//?1.returns new array
//?2.there is high chance of 
//? original array length !== return array length
//?3.it select or deselect value
//?4.it does not change array item
const numList=[1,54,23,34,67,-98,50,-36];
//? for eg i need only positive number
const newNumList=numList.filter((item,index,array)=>{
    if(item>0)
        {
            return item;
        }
        //? return item>0;
        //? =>item>0);

});
console.log(newNumList)
//? find all items whose price is less than 10
