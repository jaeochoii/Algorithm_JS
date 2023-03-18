function solution(array) {
    let max = 0;
    let count;
    let arr = [];
    for(let i=0; i<array.length; i++){
        if(max < array[i]){
            max = array[i];
            count = i;
        }
    }
    arr[0] = max;
    arr[1] = count;
    return arr;
}