function isPrime (num) {
  if (num === 1 || num === 0) {
    return false;
  }
  for (var i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function generatePrimesUpTo(end) {
  var primes = [];
  
  for (var i = 2; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

// find primes up to num's sqrt
// while num != 1
// if num is divisble by prime push prime in primeFactors
// update num to the value of remainder

function findPrimeFactorsOf(num) {
  var possiblePrimes = generatePrimesUpTo(Math.ceil(Math.sqrt(num)));
  var primeFactors = [];
  var i = 0;
  
  while (num !== 1) {
    if (num % possiblePrimes[i] === 0) {
      primeFactors.push(possiblePrimes[i]);
      num = num / possiblePrimes[i];
      i = 0;
    } else {
      i++;
    }
  }
  
  return primeFactors;
}


function getNumbersUpTo(limit) {
  var nums = [];
  
  for (var i = 1; i <= limit; i++) {
    nums.push(i);
  }
  
  return nums;
}


// input: number
// output array containing unique primes, for the number, raised to their exponents

// find numbers exponents
// create a set to get unique primeFactors
// create an array baseExpData to store base-exponent pairs

// var uniquePrimes = new Set(findPrimeFactorsOf(num));
// var nonUniquePrimes = findPrimeFactorsOf(num);
// uniquePrimes = [...uniquePrimes];

// iterate each item of the uniquePrimes, comparing it to each number of nonUniquePrimes
// create var exponent = 0
// if the numbers match exponent++
// after iterating nonUniquePrimes push the current num of the set and exponent into baseExpData
// set exponent to 0

// return baseExpData

// FINDING PRIME FACTORS - USEFUL FUNCTION BUT NOT THIS TIME :(
// function findBaseAndExponentsOfPrimes(num) {
//   var uniquePrimes = new Set(findPrimeFactorsOf(num));
//   var nonUniquePrimes = findPrimeFactorsOf(num);
//   return [...uniquePrimes]
//                           .map(function(currUniquePrime) {
//                             var exponent = 0;
//                             nonUniquePrimes.forEach(function(currNonUniquePrime){
//                               if (currUniquePrime === currNonUniquePrime) {
//                                 exponent++;
//                               }
//                             });
//                             return Math.pow(currUniquePrime, exponent);
//                           });
// }

// DON'T THINK THIS IS USEFUL THOUGH
// function findBiggestPrimeSquaresOf(num) {
//   var baseExpData = findBaseAndExponentsOfPrimes(num);
//   var numbers = getNumbersUpTo(num);
//   return baseExpData
//                     .map(function(currUniquePrime) {
//                       var biggestSquare = 0;
//                       numbers.forEach(function(currNum){
//                         if (Math.sqrt(currNum) === currUniquePrime) {
//                           if (currNum > biggestSquare) {
//                             biggestSquare = currNum;
//                           }
//                         } else if (currNum === currUniquePrime) {
//                           biggestSquare = currUniquePrime;
//                         }
//                       });
//                       return biggestSquare;
//                     });
// }

// find unique primes of num
// erase them from non unique primes up to num 
// check if nonUniquePrimes include any of biggest squares of its primes
// if not push the squares into nonUniquePrimes
// multiply nonUniquePrimes


// iterate in the primesUpTo array
