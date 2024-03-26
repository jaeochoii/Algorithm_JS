const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, Q] = input.shift().split(' ').map(Number);
const FUEL = input.shift().split(' ').map(Number).sort((a,b) => a - b);

for(let i = 0; i < Q; i += 1) {
    let M = Number(input[i]);

    let low = -1;
    let high = N-1;

    while(low + 1 < high) {
        let mid = Math.floor((low + high) / 2);

        if(FUEL[mid] >= M) high = mid;
        else low = mid;
    }

    if(FUEL[high] !== M) console.log(0);
    else console.log(high * (FUEL.length - high - 1));
}
