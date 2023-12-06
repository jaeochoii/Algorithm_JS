function solution(wallpaper) {
  const X = [];
  const Y = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {

      if (wallpaper[i][j] === "#") {
        Y.push(i);
        X.push(j);
      }

    }
  }

  X.sort((a, b) => a - b);
  Y.sort((a, b) => a - b);

  return [Y[0], X[0], Y[Y.length - 1] + 1, X[X.length - 1] + 1];
}