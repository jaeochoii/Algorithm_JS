const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let N = input.shift();

const result = input.map(v => {
  const [a, b] = v.split(' ');  
    
  let pow = 1;

  for (let j = 0; j < b; j++) {
    pow = (pow * a) % 10;
  }
    
  return pow === 0 ? 10 : pow;
});  

console.log(result.join("\n"));