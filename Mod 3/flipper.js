const flipPairs = str => {
  let strArr = str.split('');
  

  for (let i = 0; i < strArr.length; i += 2) {
    const temp = strArr[i];
    strArr[i] = strArr[i + 1];
    strArr[i + 1] = temp;
  }
  
  return strArr.join('');
};

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);

console.log(output);
