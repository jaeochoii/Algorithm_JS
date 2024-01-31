let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, K] = input[0].split(" ").map(Number);

const BFS = () => {
    const queue = [[N, 0]];
    const visited = new Array(100001).fill(false);
    visited[N] = true;

    while (queue.length) {
        const [position, time] = queue.shift();

        if (position === K) {
            console.log(time);
            return;
        }

        for (let next of [position * 2, position - 1, position + 1]) {
            if (next < 0 || next > 100000 || visited[next]) continue;

            if (next === position * 2) {
                queue.unshift([next, time]);
            } else {
                queue.push([next, time + 1]);
            }
            visited[next] = true;
        }
    }
};

BFS();