function solution(array, height) {
    let count = 0;
    for(let i=0; i<array.length; i++){
        if(height < array[i]){
            count += 1;
        }
    }
    return count;
}