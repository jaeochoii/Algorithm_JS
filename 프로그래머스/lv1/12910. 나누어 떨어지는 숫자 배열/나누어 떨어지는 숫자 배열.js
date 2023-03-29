function solution(arr, divisor) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%divisor === 0){
            newArr.push(arr[i]);
        }
    }
    if(newArr.length === 0){
        return [-1];
    }
    newArr.sort((a,b) => a-b);
    return newArr;
}