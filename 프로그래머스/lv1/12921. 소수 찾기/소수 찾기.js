function solution(nums) {
    const prime = new Array(nums+1).fill(1);
    let count = nums-1;
    for (let i=2; i<Math.sqrt(nums); i++)
        if (prime[i])
            for (let j=i**2; j<=nums; j+=i)
                if (prime[j]) count--, prime[j]=0;
    return count;
}