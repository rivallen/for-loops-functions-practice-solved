// EXERCISE 4
// Return the MIN and the MAX value in the given array of numbers
// findMinValueInArray([2, 45, 32, 3, 0, 46, 12]) => 0
// findMaxValueInArray([2, 45, 32, 3, 0, 46, 12]) => 46

export function findMinValueInArray(array) {

  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (currentNum < min) {
      min = currentNum;
    }
  }
  return min;
}

export function findMaxValueInArray(array) {

  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (currentNum > max) {
      max = currentNum;
    }
  }
  return max;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-4"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


//  questions : ok so i set infinity as a number as to not have 0 become an 
//issue but will this break upon negative numbers, this seemed like a simple solution 