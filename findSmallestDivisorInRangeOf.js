/*
  Any positive non-prime number can be expressed as a product of two prime numbers. Thus, if you want to find a number 
  divisible by each number within a given range, you only need to find out if the number is divisible by each prime number
  of the range. Furthermore, if you know that the number is divisible by a prime number raised to a certain power you 
  don't need to check if the number is divisible by the prime base.
  This is how I implemented the function using the above information. 
*/

// Input: any number
// Output: number is prime => true || false
// A helper function to find primes
// check if num is 0 || 1 and return false if so
// iterate until the sqrt of the num
// if num is divisible by i return false
// return true else

const isPrime = num => {
  if (num === 0 || num === 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  
  return true;
};

// Input: a number
// Output: an array containing all primes within a given range
// create a generatePrimesUpTo function to find primes within a given range
// use isPrime to find primes and collect them in an array

const generatePrimesUpTo = num => {
  let primes = [];
  
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
};


// input: a number
// output: a product of unique prime numbers || prime squares within a range
// find the largest powers of prime bases that don't exceed a given range
// highest base for 5 is 1 since 5^2 = 25 --> 25 > 20
// add products in a Set to get rid of repetitions
// sum up all nums in the set and return the product

const findSmallestNumDivisbleInRange = num => {
  const bases = generatePrimesUpTo(num);
  let products = new Set();
  for (let j = 0; j < bases.length; j++) {
    let largestProduct = 0; 
    for (let i = 1; i <= 1e2; i++) {
      if (Math.pow(bases[j], i) <= num) {
        if (Math.pow(bases[j], i) > largestProduct) {
          largestProduct = Math.pow(bases[j], i);
        }
      }
    }
    products.add(largestProduct);
  }
  
  return [...products].reduce((a, b) => a *= b);
};

const assertEqual = (expected, actual, testName) => {
  if (expected === actual) {
    console.log(testName + ' passed');
  } else {
    console.log('FAILED [' + testName + '] Expected [' + expected + '], but got [' + actual + '].');
  }
};


assertEqual(232792560, findSmallestNumDivisbleInRange(20), 'Should find the smallest number divisible by each number within a range of 2 to 20');
assertEqual(2520, findSmallestNumDivisbleInRange(10), 'Should find the smallest number divisible by each number within a range of 2 to 10');
assertEqual(10, findSmallestNumDivisbleInRange(10), 'Should throw an error, since given a wrong expected value');





