function solution(numbers) {
    let result = [];
    
    for(let i = 0; i < numbers.length; i += 1) {
        let bit = numbers[i].toString(2).split('');
        bit.unshift('0');
        
        if(numbers[i] % 2 === 0) result.push(numbers[i] + 1);
        
        else {
            for(let j = bit.length - 1; j >= 0; j -= 1) {
                if(bit[j] === '0') {
                    bit[j] = '1';
                    bit[j+1] = '0';
                    const answer = bit.join('');
                    result.push(parseInt(answer, 2));
                    break;
                }
                
                else continue;
            }
        }
    }
    
    return result;
}