function solution(a, d, included) {
    const LENGTH = included.length;
    let sum = 0;
    let number = a;
    
    for(let i=0; i<LENGTH; i++){
        if(included[i] === true) sum += number;
        number += d;
    }
    
    return sum;
}