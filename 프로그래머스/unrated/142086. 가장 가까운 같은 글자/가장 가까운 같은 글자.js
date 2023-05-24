function solution(s) {
    s = s.split('');
    
    let stack = [];
    let result = [];
    
    for(let i=0; i<s.length; i++){
        if(stack.indexOf(s[i]) === -1){
            stack.push(s[i]);
            result.push(-1);
        }
        else{
            let k = stack.lastIndexOf(s[i]);
            stack.push(s[i]);
            result.push(stack.length-1-k);
        }
    }
    return result;
}