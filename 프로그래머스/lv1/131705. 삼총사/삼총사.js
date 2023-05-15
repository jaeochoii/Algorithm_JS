function solution(number) {
    let stack = [];
    let cnt = 0;
    for(let i=0; i<=number.length - 3; i++){
        stack.push(number[i]);
        for(let j=i+1; j<=number.length -2; j++){
            stack.push(number[j]);
            for(let k=j+1; k<=number.length-1; k++){
                if(number[k] === -1 * (stack[0] + stack[1])){
                    stack.push(number[k]);
                    if(stack.length === 3){
                        cnt++;
                        stack.pop();
                    }
                }
            }
            stack.pop();
        }
        stack.pop();
    }
    return cnt;
}