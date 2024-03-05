function solution(topping) {    
    let chulsu = new Map();
    let brother = new Map();
    
    for(let i = 0; i < topping.length; i += 1) {
        const value = topping[i];
        if(chulsu.has(value)) chulsu.set(value, chulsu.get(value) + 1);
        else chulsu.set(value, 1);
    }
    
    let count = 0;
    const LEN = topping.length;
    
    for(let i = 0; i < LEN; i += 1) {
        const value = topping.pop();
        
        if(brother.has(value)) brother.set(value, brother.get(value) + 1);
        else brother.set(value, 1);
        
        chulsu.set(value, chulsu.get(value) - 1);
        if(chulsu.get(value) === 0) chulsu.delete(value);
        
        if(chulsu.size === brother.size) count += 1;
    }
    
    return count;
}