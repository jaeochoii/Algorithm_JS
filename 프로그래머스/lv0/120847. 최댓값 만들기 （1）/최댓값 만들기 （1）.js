function solution(numbers) {
    let max1 = 0;
    let max2 = 0;
    for(let i=0; i<numbers.length; i++){
        if(max1 < numbers[i]){
            max1 = numbers[i];
            numbers.splice(i,1);
        }
    }
    for(let j=0; j<numbers.length; j++){
        if(max2 < numbers[j]){
            max2 = numbers[j];
        }
    }
    return max1 * max2;
}