function solution(files) {
  const answer = [];

  for (let f of files) {
    let [fileName, head, number] = f.match(/^(\D+)([0-9]+)(.*)$/);
    answer.push([fileName, head.toLowerCase(), +number]);
  }

  answer.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[2] > b[2]) return 1;
    if (a[2] < b[2]) return -1;
  });

  return answer.map(v => v[0]);
}