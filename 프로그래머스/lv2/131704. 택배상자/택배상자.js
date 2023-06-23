function solution(order) {
    let reorder = order.reverse();
    let stack = [];
    let cnt = 0;
    
    for(let i=1; ; ){
        if(reorder.length === 0) break;
        if(stack[stack.length-1] === reorder[reorder.length-1]){
            stack.pop();
            reorder.pop();
            cnt++;
        }
        else if(i === reorder[reorder.length-1]){
            reorder.pop();
            cnt++;
            i++;
        }
        else{
            if(reorder[reorder.length-1] < i) break;
            else{
                stack.push(i);
                i++;               
            }
        }
    }
    return cnt;
}