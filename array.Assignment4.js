// 1.Write a program to sum all elements of the array[10,20,30,40,50]
// let arr=[10,20,30,40,50]
// sum=0;
// size=arr.length
// for(i=0;i<size;i++){
//     sum=sum+arr[i];
//     console.log(sum)
// }

// 2.Write a program to display odd and even number element of the array[10,23,11,12,33,44,2,5,6]

// arr=[10,23,11,12,33,44,2,5,6];
// for(let i=0;i<arr.length;i++){
//   if(arr[i]%2==0)
//   {
//     console.log("Number is Even number: ",arr[i])
// }
// else{
//   console.log("Number is Odd number: ",arr[i])
// // }

// }
// 3. write a program to count all odd and even number in the array[10,23,11,12,33,44,2,5,6] ;
arr=[10,23,11,12,33,44,2,5,6];
count=0;
arr=[0]
for(let i=0; i<arr.length;i++){
  if(arr[i]%2==0)
  {
    console.log('some of  even',arr[i])
    
  }
  else{
    console.log('some of odd',arr[i])
    count=arr[i]+count;
  }
  }






// 4.write a program to interchange the first element and last elements in an array[10,23,11,12,33,44,2,5,6].
arr=[10,23,11,12,33,44,2,5,6]
let temp=arr[0]
arr[0]=arr[arr.length-1]
arr[arr.length]=temp;
console.log("Array after interchnage ",arr);

// 5.write a program to duplicate all the items in an array.
// Example:[1,2,3]-->
// [1,2,3,1,2,3,1,2,3]
// arr=[1,2,3];
// for(i=0;i<4;i++){
//     console.log(arr)
// }

// 6. Find the smallest element in the array [10,23,11,12,33,44,2,5,6]

// arr=[10,23,11,12,33,44,2,5,6];
// let size=arr.length

// console.log(arr[i])
// 13.Reverse of array
// arr=[1,2,3,4,56,1,22,23,33,23,56]
// res=arr.reverse()
// console.log(res)

// 14.Arrange the array assending order
// console.log("-------------Assending order---------")
// arr=[1,2,3,4,56,1,22,23,33,23,56]
// res=arr.sort((a,b)=>a)
// console.log(res)

// //15.  Arrange the array decending order
// console.log("_---------Descending order--------------")
// arr=[1,2,3,4,56,1,22,23,33,23,56]
// res=arr.sort((a,b)=>b-a)
// console.log(res)

// // 16. Write a program to print all vowels present in an array of stings["Dreamer", "Infotech"]
// let str=["Dreamer","Infotech"]
// for(i=0; i<str.length;i++)
//     if(str.indexOf(str[i])){
//         str+=1; 
//      console.log(str[i])
       
//    }

// 17. Write a program to  take input from the user for an array of elements. The user will input each
//  element of the array one bye one. After receiving all the element , containing these elements(maximum 5 elements).
num=Number(prompt('Enter the first element'))
box=0;
for(i=0;i<num.length;i++){
  document.write(num[i])
  box.push(num[i]+1)
  
}
