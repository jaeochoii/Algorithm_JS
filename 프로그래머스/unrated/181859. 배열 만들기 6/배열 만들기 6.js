function solution(arr) {
    let stack = [arr[0]];
    for(let i=1;i<arr.length;i++){
        stack[stack.length-1] === arr[i] ? stack.pop() : stack.push(arr[i]);
    }
    return stack.length ? stack : [-1];
}