//Homework Function Drills

// 1 . ) Write a function that outputs the sum of the first and the last index of an array.

 var sumOfArray = [1,2,3,4,5] 
 if (sumOfArray.length > 0){
    let len = sumOfArray.length
    result = sumOfArray[0]+sumOfArray[len -1]
 
   console.log(result)
 }
 // expected output =>  sum = 6


// 2. Write a JavaScript program to find the leap years in a given range of years. 
let startYear = 2000
let endYear = 1978
let leapYear = (startYear - endYear) / 4
console.log(leapYear)


// 3. Write a JavaScript function to sort the following array of objects by title value.
 let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
   
   library.sort( function(a,b){
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          }
    );

  console.log(library)

 // 4. Write a JavaScript program that takes an array with mixed data type and calculate the sum of all numbers.
 // Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
function check(testData1){
    let total = 0;
    for(let i=0; i<testData1.length;i++){
        if (typeof testData1[i]==="number")
        total = total +testData1[i]
    }
    return total
}

let testData1 = [2, "11", 3, "a2", false, 5, 7, 1]
console.log(check(testData1))



// 5. You will be given an array of drinks, with each drink being an object with two properties: name and price. 
   // Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
   // Assume that the following array of drink objects needs to be sorted:
   drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ]

  drinks.sort(function(a,b){
    if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
   )

  console.log(drinks)
//   example output =>
//   sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]