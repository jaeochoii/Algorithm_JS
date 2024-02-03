const [T, ...input] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const output = [];

for (let i = 0; i < input.length; i += 3) {
  const p = input[i];
  const n = +input[i + 1];
  const arr = JSON.parse(input[i + 2]);
  let isReversed = false;
  let isError = false;
  let startIndex = 0;
  let endIndex = n - 1;

  for (const command of p) {
    if (command === 'R') {
      isReversed = !isReversed;
    } else {
      if (startIndex > endIndex) {
        isError = true;
        break;
      }
      if (isReversed) {
        endIndex--;
      } else {
        startIndex++;
      }
    }
  }

  const outputArr = arr.slice(startIndex, endIndex + 1);
  output.push(
    isError
      ? 'error'
      : JSON.stringify(isReversed ? outputArr.reverse() : outputArr)
   );
}

console.log(output.join('\n'));