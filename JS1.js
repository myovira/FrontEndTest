// let num=11;
// if(num%2===0){
//     console.log("Even Number");
// }else{
//     console.log("Odd Number");
// }
// let num = prompt("Enter a Number:");
// if(num%5===0){
//     console.log(num,"is a Mumtiple of 5");
// }else{
//     console.log(num,"is NOT a Multiple of 5");
// }
// let mark=prompt("Enter Your Score");
// if(mark>= 90 && mark<= 100){
//     console.log("A Grade");
// }else if(mark>=70 && mark<=89){
//     console.log("B Grade");
// }else if(mark>=60 && mark<=69){
//     console.log("C Grade");
// }else if(mark>=50 && mark<=59){
//     console.log("D Grade");
// }else{
//     console.log("Fail");
// }

//User Name And Passwaord:

// let username="durga";
// let pass="1234";
// username=prompt("ENTER USERNAME");
// pass=prompt("ENTER PASSWORD");

// if(username=="durga" && pass=="1234")
//     {
//     console.log("Congratulations!!!! You Have Loging Successfully");

//     } else {
//         console.log("Sorry!!!! Invalid Credentials Given");

//     }

// //Even Odd Number

// let num=prompt("Input a Number");
// if(num % 2===0){
//     console.log(num,"is a EVEN Number");
// }else{
//     console.log(num,"is a ODD Number");

// }
// let res;
// let num=prompt("Enter a number to get Table of the Same");
// for(let i=1; i==10;i++)
//     {
//     console.log(res=num*i);
// }

//1 to 50 numbers those are even and multiples of 7

// for(let i=1; i<=50;i++)
// {
//     if (i%2==0 && i%7==0){
//         console.log(i,"Even and Multiple of 7");
//     }
// }

//Negative and Positive Number.
// let num=prompt("Enter a Number")
// if(num<0){
//     console.log("Its Negative Number");
// }else{
//     console.log("Its a Positive Number")
// }

// for(let num%2==0 && num%7==0){
//     console.log("Number is even and Multiple of 7")
// }else{
//     console.log("Not Even and Mutiple of 7")
// }



//Test on 5th-Oct-24
//Question.1 Table of Given Number upto 10

let num=prompt("Input A Number")
let sum=0;
for(i=1;i<=10;i++){
    sum=num*i;
    console.log(sum);
    }
   
//Quetion Number 2. Celsius to fahreheit converter
let tempt=prompt("Input Temprature in celsius");
let fahre=0;
fahre=(tempt*9/5)+32;
console.log(tempt,"Celsius=",fahre,"Fahreheit");

//Question No.3 Find out given number is POsitive or Negative.

let num1=prompt("Enter a Number");
if (num1<=0){
    console.log(num1,"is Negative Number");
}else {
    console.log(num1,"is Positive Number");
}