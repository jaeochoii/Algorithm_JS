function solution(nums) {
    nums = nums.sort((a,b) => a-b);
    let k = nums.length / 2;
    
    let stack = [];
    for(let i=0; i<nums.length; i++){
        if(stack.length === 0) stack.push(nums[i]);
        else if(nums[i] !== stack[stack.length-1]) stack.push(nums[i]);
        else continue;
    }
    
    if(stack.length < k) return stack.length;
    else return k;
}