function solution(nums) {
    let arr = [];
    let sum = 0;
    let cnt = 0;
    
    for(let i=0; i<nums.length-2; i++){
        for(let j=i+1; j<nums.length-1; j++){
            for(let k=j+1; k<nums.length; k++){
                sum = nums[i] + nums[j] + nums[k];
                arr.push(sum);
                sum = 0;
            }
        }
    }
    
    for(let i=0; i<arr.length; i++){
        let k=0;
        for(let j=2; j<arr[i]; j++){
            if(arr[i]%j === 0) k++;
        }
        if(k === 0) cnt++;
    }
    
    return cnt;
}