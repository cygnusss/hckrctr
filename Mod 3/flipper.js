const flipPairs = str => {
  // turn the input str into an arr
  let strArr = str.split('');
  
  // create a for loop with i increasing by two
  for (let i = 0; i < strArr.length; i += 2) {
    // save the current element under index i into a temp var
    const temp = strArr[i];
    // current element steals the value of its neighbor to the right
    strArr[i] = strArr[i + 1];
    // the neighbor takes the saved value of curr var
    strArr[i + 1] = temp;
  }
  
  // join the arr back into str
  return strArr.join('');
};

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
