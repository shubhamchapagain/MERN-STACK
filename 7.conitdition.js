//? condition
console.log("hi")
console.log(2+3);
console.log("Hello");
//? if
//? if else
//?if else if else
//? switch
//? ternary


//? if
//? syntax
//  if(condition)
//     {
//         some code
//     }
if(2==3)
{
    console.log(2+3)
}
//? if else
//? syntax
// if (condition)
//     {
//     some code
//     }
// else{
//     some code
// }
if(2==3)
    {
        console.log("nepal");
    }
else{
    console.log("seattle");
}
//? find if a number is odd or even
let x= 24
let remainder=x%2;
if(remainder==0)
    {
        console.log(`${x} is even .`)
    
    }
    else
    {
        console.log(`${x} is odd`)
    }


//? if..elseif...else
// if(condition1)
//     {

//     }
// else if(condition2)
//     {

//     }
// else {

// }

//? example find polaritu of a number
let value=-26
if(value<0)
    {
        console.log(`${value} is negative.`)
    }
else if(value>0)
    {
        console.log(`${value} is positive.`)
    }
else{
    console.log(`${value} is zero.`)
}
//? suppose any three positive number  and find greatest number among three
let a=89;
let b=73;
let c=123;
if(a>b && a>c)
    {
        console.log(`${a} is greatest.`)
    }
else if(b>c)
    {
        console.log(`${b} is greatest.`)
    }
else{
    console.log(`${c} is greatest.`)
}

// ? switch best for multiple choice question
//? 1. green
//? 2. yellow
//? 3. pink
//? syntax
// switch(variable){
//     case value1:
//          some code
//          break;
//     case valueN:
//         some code
//         break;
//     default:
//         some code
// }
let dayNumber=12
switch(dayNumber){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 6:
        console.log("Thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    case 8:
        console.log("Saturday");
         break;
    default:
        console.log("Invalid number");
            
}
// ? ternary condition alternative code 
//? ternary code of odd even
let g=33;
let rem=g%2;
rem ===0?console.log(`${g} is even.`):console.log(`${g} is odd.`)
console.log(rem===0?"even":"odd")

//? polarity of the number having multiple condition
let as=-120;
as<0?console.log("negative"):as>0?console.log("positive"):console.log("zero")


