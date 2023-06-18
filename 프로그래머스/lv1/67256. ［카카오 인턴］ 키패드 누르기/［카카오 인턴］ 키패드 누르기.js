function solution(numbers, hand) {
    let result = [];
    let currentL = 9;
    let currentR = 11;
    
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] === 0) numbers[i] = 10;
        else numbers[i] = numbers[i]-1;
    }
    
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]%3 === 0){
            result.push("L");
            currentL = numbers[i];
        }
        else if(numbers[i]%3 === 2){
            result.push("R");
            currentR = numbers[i];
        }
        else {
            let L = Math.abs(Math.floor(numbers[i]/3)-Math.floor(currentL/3)) + Math.abs(Math.floor(numbers[i]%3)-Math.floor(currentL%3));
            let R = Math.abs(Math.floor(numbers[i]/3)-Math.floor(currentR/3)) + Math.abs(Math.floor(numbers[i]%3)-Math.floor(currentR%3));
            if(L === R){
                if(hand === "left"){
                    result.push("L");
                    currentL = numbers[i];
                }
                else{
                    result.push("R");
                    currentR = numbers[i];
                }
            }
            else if(L < R){
                result.push("L");
                currentL = numbers[i];
            }
            else if(L > R){
                result.push("R");
                currentR = numbers[i];
            }
        }
    }
    return result.join('');
}