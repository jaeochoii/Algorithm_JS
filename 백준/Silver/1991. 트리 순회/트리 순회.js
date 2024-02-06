let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input.shift());

let tree = {};
for(let i = 0; i < N; i += 1) {
    const [node, left, right] = input[i].split(' ');
    tree[node] = [left, right];
}

let result = '';

function inOrder(node) {
    if(node !== '.') {
        const [LC, RC] = tree[node];
        inOrder(LC);
        result += node;
        inOrder(RC);
    }
    else return;
}

function preOrder(node) {
    if(node !== '.') {
        const [LC, RC] = tree[node];
        result += node;
        preOrder(LC);
        preOrder(RC);
    }
    else return;
}

function postOrder(node) {
    if(node !== '.') {
        const [LC, RC] = tree[node];
        postOrder(LC);
        postOrder(RC);
        result += node;
    }
    else return;
}

preOrder('A');
result += '\n';
inOrder('A');
result += '\n';
postOrder('A');

console.log(result);