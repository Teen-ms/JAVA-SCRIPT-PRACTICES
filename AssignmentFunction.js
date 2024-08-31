// 1. Write a function to count the total odd and total even numbers by taking the start point and end point as arguments.


function count(start, end) {
    // Initialize counters
    let oddCount = 0;
    let evenCount = 0;

    // Iterate through the range
    for (let num = start; num <= end; num++) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Return the results
    return {
        odd: oddCount,
        even: evenCount
    };
}
const startPoint = 1;
const endPoint = 23;
const counts = count(startPoint, endPoint);
console.log(`Total odd numbers: ${counts.odd}`);
console.log(`Total even numbers: ${counts.even}`);

// 2.Write a function to filter out the greatest string from a given array

// let arr=["shiavni","panchal", "Rohan", "cold", "fiteness"]
// function fun(){
//     if(string.length==0)
//        return{
                // stringArray.reduce((greatest,current))
//             }
//     }
// let result=arr.filter(fun);
// console.log(result);


function findGreatestString(strings) {
    if (strings.length === 0) {
        return null;  // Handle the case of an empty array
    }
    // return strings.reduce((greatest, current) => current > greatest ? current : greatest);
}

// Example usage:
const stringArray = ["apple", "baaanana", "cherry"];
const greatestString = findGreatestString(stringArray);
console.log(greatestString);  
// Output: cherry