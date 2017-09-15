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
}

// Any positive number can be a product of primes
// thus create a generatePrimesUpTo function to find primes in range
// use isPrime to find primes and collect them in an array

const generatePrimesUpTo = num => {
  let primes = [];
  
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

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
      if (Math.pow(bases[j], i) < 20) {
        if (Math.pow(bases[j], i) > largestProduct) {
          largestProduct = Math.pow(bases[j], i);
        }
      }
    }
    products.add(largestProduct);
  }
  
  return [...products].reduce((a, b) => a *= b);
}
findSmallestNumDivisbleInRange(20)
