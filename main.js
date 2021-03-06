// 1.
//  Using the filter method, filter out the sedans.
// output =>
//  { brand: 'Toyota', model: 'camry', type: 'sedan' },
//   { brand: 'Hyundai', model: 'Sonata', type: 'sedan' }
const carBrands = [
  { brand: "Ford", model: "mustang", type: "convertible" },
  { brand: "Toyota", model: "camry", type: "sedan" },
  { brand: "Ram", model: "1500", type: "pickup" },
  { brand: "Hyundai", model: "Sonata", type: "sedan" },
  { brand: "Jeep", model: "wrangler", type: "suv" },
  { brand: "Nissan", model: "frontier", type: "pickup" },
];

function carTypeSedan(arr) { 
  return arr.filter(element => { 
    return element.type === "sedan"
  })
}

/* 2.
 * reverseString takes a string
 * and should return the reverse of the string, you cannot use .reverse method
 * e.g., reverseString('cat') => 'tac'
 */

function reverseString(str) { 
  let array = [];

  for (let i = str.length; i >= 0 ; i--) { 
    array.push(str[i]);
  }

  return array.join('');
}

// 3.
// Write a function that takes an array of strings,
// and returns the longest string in the array
//['hello', 'catepillars']

function longestStr(arr) { 
  let length = 0;
  let str;

  for (let i = 0; i < arr.length; i++) { 
    if (length < arr[i].length) {
      length = arr[i].length
      str = arr[i]
    }
  }
  return str;
}



// 4.
// Using Reduce,
// Given an array of all your wishlist items, figure out
// how much it would cost to just buy everything at once
// In other words, the total of all the prices in the array
// of objects
// The output should eqaute to 227005
let wishlist = [
  { title: "tesla", price: 90000 },
  { title: "tesla", price: 45000 },
  { title: "tesla", price: 5 },
  { title: "tesla", price: 2000 },
  { title: "tesla", price: 90000 },
];
function shop(arr) {
  return wishlist.reduce((accumulator, current) => { 
    return accumulator + current.price;
  }, 0)
}
console.log(shop(wishlist));

// 5.
//Explain recursion in your own words,
// give an example of a recursive algorithm, and explain how it works
//Make sure to detail the steps that make up a recursive algorithm
// A detailed explanation.
 
/*
  Recursion is an algo where the function calls itself until a base case, usually a condition,
  turn to be true and a return value is executed. The return value from the base case is then
  use for the previous recursive call that was made. In addition to recursion, when a recursive
  call is made, the algo will enter a callstack meaning we are entering the function itself
  with a different unique value as the parameter of the recursion function. When the value
  of parameter meets true to the condition of the base case, the base case will return another
  value, and exiting the current callstack to the previous callstack where previous recursive 
  function was called. Because recursion adds callstack the space complexity of the recursion
  is not good perhaps with a range O-notation from O(n) = O(n^2).

 ex: 
  function sum(n) {
    if(n === 0){
      return 0;
    }
    return sum(n - 1) + n
  }

  sum(3) //1 + 2 + 3 = 6


*/


//6. List two sorting algorithms,
// explain in detail how both sorting algorithms work
// explain the benefits and the cons of each sorting algorithm
// Should take more than one paragraph to do this part

/* Elementary Sorting
 Bubble sort: 
  -it has the time complexity of O(n^2) and space complexity O(1). The reason the time 
  complexity of the bubble sort is not good is because we have nest for loops on the algo,
  and the bigger the array the slow the sorting occurs. Also, although bubble sort is 
  inefficient with time, it still serves as the foundation to learn about other types
  sortings.
  -Bubble sort grabs an unsorted array and takes the first element to compare to the
  neighboring element. If the current element is greater than the neighboring element,
  then a swap will happen. This will continue until the biggest value is sent to the end of
  the array or bubble to the end of the array. This how the first iteration is completed. The 
  next iteration will do the same, current value compare with neighboring value, if current
  value is bigger than the neighboring value then a swap will occur. The swap means
  that the current value will go second and the neigboring value will go first. The iteration
  will stop when the second largest value is bubbled up to the second to the last of the array.
  With in each iteration the sorting of elements become smaller and smaller until the 
  array becomes completely sorted.

*/

/* Intermediate Sorting
Merge sort:
-it has a faster time complexity than Bubble sort at O(nlogn), however, the space
complexity is O(n) and this is due to the recursive calls in the algos. Merge sort might do 
great on an array that is unsorted but will still do the same function on an array that
its sorted and it can harm the time complexity in that case.

-Merge sort takes an unsorted, finds the midpoint of the array and split it up in half. 
These halves are then done the same, find mid point of array, and split in half. The splitting
of arrays will stop when you get single arrays. These single arrays are then compare, sorted,
and merged into pairs. Then these pairs are compare, sorted, and merging again into another 
bundle of sorted array. The merging will stop when you get a complete array of sorted element.
*/




/*  7.
 * flipBool takes an array of Boolean values
 * it should call map on the array and flip
 * each Boolean value to its opposite,
 * e.g., flipBool([true]) => [false]
 *       flipBool([false, true]) => [true, false]
 *       etc
 * then return the new array
 * Be sure to use map()!
 */
const flipBool = (arr) => { 
  return arr.map((element) => { 
    if (element === true) {
      return arr[element] = false;
    } else { 
      return arr[element] = true; 
    }
  })
};




//Bonus:
//FEAST OR FAMINE
//  - Write a method that takes two arguments: an animal and a food, which are 
//lowercase and have at least two letters each
//  - If the first and last letter of the animal match the first and last letter of 
//the food, return the first and last letters
//  - otherwise, if the letters do not match, return false
// > i.e.:
// > input => `"great blue heron", "garlic naan"`
// > output => `"gn"`


function feastOrFamine(animal, food) { 
  if (animal[0] + animal[animal.length - 1] === food[0] + food[food.length - 1]) {
    return animal[0] + food[food.length - 1]
  } else { 
    return false;
  }
}
