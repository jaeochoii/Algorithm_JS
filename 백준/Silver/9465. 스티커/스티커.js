const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on('line', function (line) {
  input.push(line)
})
  .on('close', async function () {
  // 답안 작성
  let answer = [];
  let n = input.splice(0,1);
  for(let i = 0; i<n;i++){
    let k = input.splice(0,1)
    let arr = [];    
    arr.push(input.splice(0,1).join('').split(' '));    
    arr.push(input.splice(0,1).join('').split(' '));
    answer.push(sticker(k, arr));
  }
  console.log(answer.join('\n'))
  process.exit();
});

function sticker(n, arr){
  let dp = [];
  for(let i = 0;i<=n;i++){
    dp.push([0,0]);
  } 
  dp[1][0] = arr[0][0];
  dp[1][1] = arr[1][0];  
  for(let i = 2;i<=n;i++){    
    dp[i][0] = Math.max(dp[i-1][1], dp[i-2][1]) +arr[0][i-1]*1;
    dp[i][1] = Math.max(dp[i-1][0], dp[i-2][0]) +arr[1][i-1]*1;
  }  
  return Math.max(...dp[n]);
}