function solution(land) {
  let arr = [];

  for (let i = 1; i < land.length; i++) {
    land[i][0] += Math.max(
      land[i-1][1],
      land[i-1][2],
      land[i-1][3]
    );
    land[i][1] += Math.max(
      land[i-1][0],
      land[i-1][2],
      land[i-1][3]
    );
    land[i][2] += Math.max(
      land[i-1][0],
      land[i-1][1],
      land[i-1][3]
    );
    land[i][3] += Math.max(
      land[i-1][0],
      land[i-1][1],
      land[i-1][2]
    );
  }
  arr = land[land.length - 1];

  return Math.max(...arr);
}