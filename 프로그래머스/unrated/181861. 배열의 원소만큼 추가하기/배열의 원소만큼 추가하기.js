function solution(arr) {
    let newArr = [];
    for(let i=0; i< arr.length; i++){
        for(let j=0; j<arr[i]; j++){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}