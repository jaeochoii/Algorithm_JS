const fs = require('fs');
const [START, TARGET] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

if (START === TARGET) {
    console.log(0);
} else {
    let visited = new Array(100001).fill(false);
    let queue = [START];
    let count = 0;

    while (queue.length) {
        let length = queue.length;

        for (let i = 0; i < length; i += 1) {
            const v = queue.shift();
            visited[v] = true;

            const nextPos = [v + 1, v - 1, v * 2];

            for (const node of nextPos) {
                if (node === TARGET) {
                    console.log(count + 1);
                    return;
                } else if (node >= 0 && node <= 100000 && !visited[node]) {
                    queue.push(node);
                    visited[node] = true;
                }
            }
        }
        count += 1;
    }
}