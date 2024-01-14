const userInput = function () {
  var fs = require("fs");
  var input = fs.readFileSync("/dev/stdin").toString().split(" ");
  var a = parseInt(input[0]);
  var b = parseInt(input[1]);
  getCountBuy(a, b);
};

const getCountBuy = function (N, K) {
  let btlCount = N;
  const canMove = K;

  let originBottle = btlCount; // 최초 N값
  let bin2Str = btlCount.toString(2);
  let bitCount = bin2Str.match(/1/g).length; // "1" 개수 값

  while (bitCount > canMove) { // "1" 개수가 K보다 작거나 같을 때 까지
    // parseInt, substring을 이용하여 "마지막 "1"의 자리"의 "2 자리제곱 값"을 가져왔다.
    btlCount += parseInt(bin2Str.substring(bin2Str.lastIndexOf("1")), 2);
    bin2Str = btlCount.toString(2);
    bitCount = bin2Str.match(/1/g).length;
  }
  console.log(btlCount - originBottle); // +된 물병수 - 최초 물병수 => 카운트
};

userInput();