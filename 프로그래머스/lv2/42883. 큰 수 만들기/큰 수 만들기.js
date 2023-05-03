function solution(number, k) {
    let stack = [];
    number = number.split('');
    
    for(let i=0; i<number.length; i++){
        if(stack.length === 0){
            stack.push(number[i]);
            continue;
        }
        
        while(k > 0 && stack[stack.length -1] < number[i]){
            stack.pop();
            k--;
        }
        
        stack.push(number[i]);
        
    }
    return stack.join('').substr(0, stack.length - k);
}