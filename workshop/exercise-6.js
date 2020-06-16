// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q6
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.
/*
-function that takes array as argument
-goes through array and checks items for % 2 !== 0 
-if true, items goes to a new variable
-displays new variable and its content as an array */

function removeEvens(numbers) {
const newArr = numbers.filter(function(num){ 
  return num % 2 !== 0
  })
  return newArr;
}

console.log(removeEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
