
// let num=[10,20,30,40,50,60]
// let size=num.length
// let s=0;
// for(let i=0; i<size ;i++){
//     s=s+num[i]
// }
// console.log(s);


// for in loop
//  let number=[10,20,30,40,50,60]
//      size=number.length;
//      let sum=0;
//      let i=0;
//      for(i in number){
//         sum=sum+number[i]
//         console.log(sum)
//      }

// Reverse array
   //   let s=[12,34.45,67]
   //      size=s.length
   //      s.reverse()
   //      console.log(size)
   //      console.log(s)
        

      // Reverse by using while loop
      let n=12345;
      reverse=0;
      while(n>0){
         remainder=n%10;
         reverse=((reverse*10)+remainder)
         n=parseInt(n/10)
      }
      console.log(reverse)