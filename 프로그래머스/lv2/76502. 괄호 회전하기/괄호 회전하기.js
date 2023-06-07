function solution(s) {
    let stack = [];
    let string = [...s];
    let cnt = 0;
    
    let obj = {"{" : "}", "[" : "]", "(" : ")"};
    
    if(string.length%2 !== 0) return 0;
    
    for(let k=0; k<string.length; k++){
        for(let i=0; i<string.length; i++){
            if(string[i] === "[" || string[i] === "{" || string[i] === "("){
                stack.push(string[i]);
            }
            else if(string[i] === obj[stack[stack.length-1]]) stack.pop();
            else continue;
        }
        if(stack.length === 0) cnt++;
        stack = [];
        string.push(string.shift());
    }
    return cnt;
}