//? check whether the given no is odd or even
let a=89;
remainder = a%2;
if(remainder==0)
    {
        console.log(`${a} is even`);
    }
else{
    console.log(`${a} is odd`);
}
//?check whether the given input is number or not

let num="72";
if(typeof(num)==="number")
    {
        console.log(`${num} is number`)
    }
else{
    console.log(`${num} is not number`)
}
//?largest of two number
let b=23;
let c =72;
if(b>c)
    {
        console.log(`${b} is largest`)
    }
else{
    console.log(`${c} is largest`)
}
//? largest of three number

let m=89;
let n=73;
let o=123;
if(m>n && m>o)
    {
        console.log(`${m} is greatest.`)
    }
else if(n>o)
    {
        console.log(`${n} is greatest.`)
    }
else{
    console.log(`${o} is greatest.`)
}
//?
let n1=23;
let n3=49;
let option =6
switch(option){
    case 1:
        console.log(`The added value is: ${n1+n3}`);
        break;
    case 2:
        console.log(`The subtracted value is: ${n1-n3}`);
        break;
    case 3:
        console.log(`The multiplied value is: ${n1*n3}`);
        break;
    case 4:
        console.log(`The divided value is: ${n1/n3}`);
        break;
    case 6:
        console.log(`The powered value is: ${n1**n3}`);
        break;
    default:
        console.log("INVALID NUMBER")
    
}
//? calculate the grade of the student
let g=30;
if(g>90 || g==90)
    {
        console.log(`${g} is A plus graded`)
    }
else if(g>80 || g==80)
    {
        console.log(`${g} is A graded`)
    }
else if(g>70 || g==70)
    {
        console.log(`${g} is B graded`)
    }
else if(g>60 || g==60)
    {
        console.log(`${g} is C graded`)
    }
else{
    
    console.log(`${g} is F graded`)
        
}


