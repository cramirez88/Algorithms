// Create a function to generate Fibonacci numbers. In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1. Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).

// Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1)+fib(2), or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8), etc.

// function fibonacci(index) {
//   let arr = [0,1]
//   for ( i = 2; i<= index; i++){
//     let new_arr = arr[i-2] + arr[i-1]
//     arr.push(new_arr)
//   }
//   return arr[index]

// }

// 2. Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result.

// Example: sumToOne(928) returns 1, because 9+2+8 = 19, then 1+9 = 10, then 1+0 = 1.

// Solve the challenge WITHOUT using recursion although you are allowed to convert the integer to a string.

// Enter code below
// let newString = num.toString()

// let sum;
// do {
//     sum = 0
// for (i = 0; i < newString.length; i++){
    
//     sum += parseInt(newString[i])
   
// }
//  newString = sum.toString()
// }
// while (sum >=10)
// return sum


// Complete the function solveMeFirst to compute the sum of two integers.

// Example
// Return 10

// function solveMeFirst(a, b) {
//   return a + b
// }








