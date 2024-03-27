

// create a table with the help of loop

// const userInput = +prompt("Enter A Table");
// const times = +prompt("How Many Times Do you Want Table");

// for ( let i = 1; i <= times ; i++){
//     console.log(`${userInput} * ${i} = ${userInput*i}`)
// }

// table loop end 



// let userInput = document.querySelector("#input1");
// let times = document.querySelector("#input2");
// let  get= document.querySelector("#get");

// function generate(){
//     for ( let i = 1; i <= times.value ; i++){
//     console.log(` ${userInput.value} * ${i} = ${userInput.value*i}`);
//     }
// }   







// let fruits = ['apple' , 'mango' , 'grapes', 'pineapple']
// console.log(fruits);
// const ul = document.querySelector('ul');

// for ( let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
//     ul.innerHTML += `<li>${fruits[i]}</li>`
// }




// Question no 4
// You have an array
//  A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

// let phone = ['Nokia', 'Samsung' , 'Apple' , "sony" , "huawei"]

// for ( let i = 0; i < phone.length; i++){
//     console.log(phone[i]);
// }


// question no Five 
// 5. Write a program to print items of the following array using for 
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// ANSWER

// let fruits = ['apple','banana','orange','mango']

// for ( let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }
// console.log("element at index at", fruits.indexOf('apple'),"is apple")
// console.log("element at index at", fruits.indexOf('banana'), "is banana")
// console.log("element at index at", fruits.indexOf('orange'), "is orange")
// console.log("element at index at", fruits.indexOf('mango'), "is mango   ")








// for (let num = 0; num <= 20; num++) {
//     if (num % 2 === 0) {
//         console.log(num + " is even");
//     } else {
//         console.log(num + " is odd");
//     }
// }


// let product = 1;

// // Loop through odd integers from 1 to 7
// for (let i = 1; i <= 7; i += 2) {
//     // Multiply the current product with the current odd integer
//     product *= i;
// }
// console.log("Product of odd integers from 1 to 7:", product);   





// Q.1 
// for(let i = 1; i <= 5; i++){
//     console.log("hello world", i)
// }

// Q.2

// for(let i=1 ; i <= 10 ;i++){
//    console.log(i)
// }


// Q.3

// const userInput = +prompt("enter a table number")
// const times = +prompt("length of multiple table")

// for(let i = 1; i <= times ; i++){
//     console.log(`${userInput}*${i} = ${userInput*i}`)
// }




// Q.6

// const N = +prompt("enter a number")
// const items = []

// for(let i=0; i<N ; i++){
//     const item = prompt("Enter items" + (i+1) + ':')
//     items.push(item)
// }
// document.write(items)























// const  fruits = ["talha","asad bahi","areeb"]
// // console.log(fruits);
//  var ol = document.querySelector("ol")

// function render(){
//     ol.innerHTML = ''
//     for(i = 0; i < fruits.length; i++){
//         console.log(fruits[i], i);
//         ol.innerHTML += `<li>${fruits[i]}</li>` 
//     }
//  }



// let i = 11;
// do{
//     console.log('do while' , i);
//     i++
// }while (11 < 10)

///nal biryni khaoo ge 
//////hello talha burger bacha 
//////////hello bhiya k dost
////////beta instagram kam ker do use krna 
//////////////////chamaty prdy g app ko 
///////////////////////hello bachoooooooooo
///////////////////


// let i = 0;
// do{
//     console.log("hello")
// }while(i<10);











// let head = document.querySelector('#input1') 
// let head1 = document.querySelector('#input2') 
 
// // var total = head.value + head1.value     
// var total = Number(head,value) + Number(head1,value);
// function check(){
//      console.log(total);
//     head.innerHTML = head.value
//     head1.innerHTML = head1.value
// }














//   Q = 9 
// var A = [90,67,109,672,787,653];
// var largestNumber = Math.max(...A)
// document.write("THE LARGEST NUMBER OF ARRAY IS" +  " " +largestNumber)

// Q = 10 
// var  A =  [24, 53, 78, 91, 12]
// var smallestNumber = Math.min(...A)
// document.write("THE SMALLEST NUMBER OF ARRAY IS" + " " +smallestNumber)

// Q = 11
// var A =  [24, 53, 78, 91, 12]
// var largestNumber = Math.max(...A)
// var smallestNumber = Math.min(...A)
// document.write("THE LARGEST NUMBER OF ARRAY IS" + " " +largestNumber)
// document.write("<br>")
// document.write("THE SMALLEST NUMBER OF ARRAY IS" + " " +smallestNumber)


// Q = 12

// for(let i=1; i<=100 ; i++){
//     if(i % 5===0){
//         console.log(i)
//     }
// }





// Q.14

// var score = [45,89,55,12,32,43]
// var stopValue = prompt("enter a stop value")

// for(let i=0; i < stopValue.length ; i++){
//     if(score[i] <= stopValue)
//     console.log(score[i])
// }


// Q.15

// var a = [[1,2,3],[4,5,6],[7,8,9]]

// for(let i = 0 ; i < a.length; i++){
//     for(let j = 0; j < a[i].length ; j++){
//         document.write(a[i][j])
//     }
// }

// Q.16

// var num = parseFloat(prompt("Enter a number"));

// while(num > 0){
//     console.log(num);
//     num -= 0.5;
// }



// Q.17

// for(let num = 0 ; num <= 20 ; num++){
//     if(num % 2 === 0){
//         console.log (num + "is even")
//     }else{
//         console.log(num + "is odd")
//     }
// }


// Q.18

// let product = 1

// for(let num = 1 ; num <= 7 ; num+=2){
//     product*=num
// }
// console.log("the product of the odd integer form 1 to 7 is" +" " +product)



// Q.19

// let initailStar = 7

// for(let i = initailStar; i > 0; i--){
//     let line = ""
//     for(let j =0; j < i; j++){
//         line +="*"
//     }
//     console.log(line)
// }
