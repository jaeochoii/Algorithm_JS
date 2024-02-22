const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split('\n');
const [N,M] = input[0].split(' ').map(Number)
let board = input.splice(1).map(v=>v.split(''))
const answer = [];

let pool = [];
for(let i = 0; i<N; i++){
  for(let j = 0; j<M; j++){
    if(board[i][j]=='*'){
      pool.push([i,j])
    }
  }
}



pool.forEach(v=>{
  const [x,y] = v;
  let up = 0;
  let down = 0;
  let left = 0;
  let right = 0;
  for(let i = x+1; i<N; i++){
    if(board[i][y]=="*"){
      up++;
    }else{
      break;
    }
  }
  for(let i = x-1; i>=0; i--){
    if(board[i][y]=="*"){
      down++;
    }else{
      break;
    }
  }

  for(let i = y+1; i<M; i++){
    if(board[x][i]=="*"){
      right++;
    }else{
      break;
    }
  }
  for(let i = y-1; i>=0; i--){
    if(board[x][i]=="*"){
      left++;
    }else{
      break;
    }
  }

  const s = Math.min(up,down,left,right);
  if(s>0){
    answer.push([x+1,y+1,s])
  }
  
})

answer.forEach(v=>{
  const [x,y,s] = v;
  const realX = x-1;
  const realY = y-1;
  for(let i  = realX; i<=realX+s; i++){
    board[i][realY] = '.';
  }
  for(let i  = realX; i>=realX-s; i--){
    board[i][realY] = '.';
  }
  for(let i  = realY; i<=realY+s; i++){
    board[realX][i] = '.';
  }
  for(let i  = realY; i>=realY-s; i--){
    board[realX][i] = '.';
  }
})

let noAnswer = false
for(let  i =  0; i<N; i++){
  for(let j = 0; j<M; j++){
    if(board[i][j]!='.'){
      noAnswer = true;
      break;
    }
  }
}

if(noAnswer){
  console.log(-1)
}else{
  console.log(answer.length);
  console.log(answer.map(v=>v.join(' ')).join('\n'))
}