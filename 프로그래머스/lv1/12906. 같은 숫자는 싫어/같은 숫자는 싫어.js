function solution(arr){
    let stack = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === stack[stack.length-1]){
            continue;
        }
        stack.push(arr[i]);
    }
    return stack;
}