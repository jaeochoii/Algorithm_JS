function solution(array, n){
    let arr = [];
    array.forEach((item) => arr.push(Math.abs(item - n)));
    const min = Math.min(...arr);
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === min){
            newArr.push(array[i]);
        }
    }
    return Math.min(...newArr);
}