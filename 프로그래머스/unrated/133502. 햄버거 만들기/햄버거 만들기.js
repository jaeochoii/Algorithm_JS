function solution(ingredient) {
    let cnt = 0;
    let stack = [];
    
    for(let i=0; i<ingredient.length; i++){
        stack.push(ingredient[i]);
        if(stack.length >= 4){
            if(stack.slice(stack.length-4, stack.length).join('') === '1231'){
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                cnt++;
            }
            else continue;
        }
    }
    return cnt;
}