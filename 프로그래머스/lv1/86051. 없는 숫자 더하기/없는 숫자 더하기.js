function solution(numbers) {
    let map = new Map();
    let sum = 0;
    
    for(let i=0; i<10; i++){
        map.set(i,0);
    }
    
    for(let i=0; i<numbers.length; i++){
        map.set(numbers[i], map.get(numbers[i]) + 1);
    }
    
    let newArr = Array.from(map.values());
    
    for(let i=0; i<10; i++){
        if(newArr[i] < 1){
            sum += i;
        }
    }
    return sum;
}