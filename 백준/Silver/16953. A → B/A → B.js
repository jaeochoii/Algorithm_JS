const fs = require('fs');
const [START, TARGET] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let count = 1;

let queue = [START];

while (queue.length) {
    const LENGTH = queue.length;

    for (let i = 0; i < LENGTH; i += 1) {
        const v = queue.shift();

        if (v === TARGET) {
            console.log(count);
            return;
        }

        const multiple = v * 2;
        const add = Number(String(v) + '1');

        if (multiple <= TARGET) {
            queue.push(multiple);
        }

        if (add <= TARGET) {
            queue.push(add);
        }
    }

    count += 1;
}

console.log(-1);