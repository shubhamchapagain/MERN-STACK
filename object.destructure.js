//?object destructure

// const bookDetail={
//     name:"Operating System",
//     author:"A.Tanenbaum",
//     publishedDate:"1990/01/01",//?for date always use string
//     noOfPages:600,
//     coverPhoto:null,
//     bookPrice:undefined,
// };
// console.log(bookDetail.name);
// console.log(bookDetail.author);
// console.log(bookDetail.publishedDate);
// console.log(bookDetail.noOfPages);
// console.log(bookDetail.coverPhoto);

// const{name,author,publishedDate,noOfPages,coverPhoto,bookPrice}=bookDetail;
// console.log(name);


//?=======================example2==================================
// const obj1={
//     name:"CUP",
//     price:12,
// };
// const obj2={
//     name:"Mouse",
//     price:11,
// };
// const { price }=obj1;
// console.log(price);
// const{price:price2}=obj2;//? price nai bhayo bhane kun chai price ta confuse so we rename it but it will not be renamed in obj2
// console.log(price2);

//?==========================example3=================================
const student1={
    name:"Sandeep",
    college:"KEC",
    isGraduated:false,
    image:null,
    address:{
        permanent:"x",
        temporary:"y",
    }
}
const{name,college,isGraduated,image,address:{permanent,temporary},}=student1;//?address nested bhako bhayera we do destructure of address
console.log(temporary)