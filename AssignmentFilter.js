// 1. Given a list of integers, use the `filter` function to create a new list that contains only the even numbers.
// let arr=[23,45,65,34,90,21,50,12]
// function check(n){
//     if(n%2==0)
//     return true;
// }
// let res=arr.filter(check)
// console.log(`Even=>${res}`)

// 2. Given a list of strings, use the `filter` function to create a new list that contains only the strings with
// length greater than 3.

// strings = ["cat", "elephant", "dog", "mouse", "bird", "lion"];
// filteredStrings = strings.filter(str => str.length > 3);
// console.log(filteredStrings);

// 3.Given a list of integers, use the `filter` function to create a new list that contains only the positive numbers.

// let positive=[23,67,-7,89,90,0,45,26]
// function pos(n){
//     if(n>0){
//    console.log("Return postive Number",[n])
//     }
// else if(n==0){
// console.log("Return equal to zero",[n])
// }
// else if(n<0){
//     console.log("Return Negative number",[n])
// }
// }
// let output=positive.filter(pos)
// console.log(output);

// 4.Given a list of strings, use the `filter` function to create a new list that contains only the strings
// that have the letter 'a' in them.


// let array=["shivani","Dev","Abhinav","pinki", "Aarav","ankita", "kirti"];
// function filter_name(n){
//    for(i of n){
//         if(i[0]=="a"){
//             return true;
//         }
//     }
//    }

// let res=array.filter(filter_name)
// console.log(res)

// 5. Given a list of integers, use the `filter` function to create a new list that contains only the numbers greater than 10.
// let int=[10,23,45,67,4,8,20,8]
// function integer(a){
//     if(a>10)
//     return true;
// }
// let integers=int.filter(integer)
// console.log("greater by 10",integers)

// 6. Given a list of strings, use the `filter` function to create a new list that contains only the non-empty strings.
// let str1=["Hello","","world","","People",""]
// function hello(s){
//     if(s==!str1)
//     return true;
// }

// let output=str1.filter(hello)
// console.log("Empty string",output)

// 7.Given a list of integers, use the `filter` function to create a new list that contains only the odd numbers.

// let list=[89,23,45,67,12,34,90]
// function odd(n){
//     if(n%2==1)
//     return true;
// }
// let ans=list.filter(odd)
// console.log("odd number",ans);

// 8. Given a list of strings, use the `filter` function to create a new list that contains only the strings 
// that start with the letter 'A'.

// let str3=["Aarav", "Tanvi", "Ankita","Amrita","Rohan", "Rahul"]
// function letter_A(n){
//     for(i of n){
//         if([i]%2=="a")
//         {
//             return true;
//         }
//     }
//     return true;
// }
// let result=str3.filter(letter_A)
// console.log(result)

// // wrong answer


// 9. Given a list of integers, use the `filter` function to create a new list that contains only the multiples of 5.
// let list=[10,23,45,67,15,20,56,50,35,12]
// function mutliple(x){
//     if(x%5==0){
//         return true;
//     }
// }
// let result=list.filter(mutliple)
// console.log(result)

// 10.Given a list of strings, use the `filter` function to create a new list that contains only the strings
// that have uppercase letters.
let str4=["RAM","SHIVANI","payal","kajal","MANISH","chinki"]
function uper(i){
    return /[A-Z]/.test(i);
    }

let result=str4.filter(uper)
console.log(result)

