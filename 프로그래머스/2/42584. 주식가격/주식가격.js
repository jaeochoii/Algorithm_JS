function solution(prices) {
    let result = [];
    
    for(let i = 0; i < prices.length; i += 1) {
        const price = prices[i];
        let times = 0;
        
        for(let j = i+1; j < prices.length; j += 1) {
            if(price <= prices[j]) times += 1;
            else {
                times += 1;
                break;
            }
        }
        
        result.push(times);
    }
    
    return result;
}