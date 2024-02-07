const INPUT_FILE = process.platform === 'linux' ? '/dev/stdin' : './input';
const [, info, initialValue, , sequence] = require('fs')
  .readFileSync(INPUT_FILE)
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

const q = {
  list: [],
  first: 0,
  length: 0,
  enqueue(value) {
    this.list.push(value);
    this.length += 1;
  },
  dequeue() {
    if (!this.length) return null;
    this.first += 1;
    return this.list[this.first - 1];
  },
};

for (let i = info.length - 1; i >= 0; i -= 1) {
  if (info[i] === 0) {
    q.enqueue(initialValue[i]);
  }
}

const sol = [];

sequence.forEach((value) => {
  q.enqueue(value);
  sol.push(q.dequeue());
});

console.log(sol.join(' '));