function solution(arr, intervals) {
    let newArr = [];
    for(let i=intervals[0][0]; i<= intervals[0][1]; i++){
        newArr.push(arr[i]);
    }
    for(let i=intervals[1][0]; i<= intervals[1][1]; i++){
        newArr.push(arr[i]);
    }
    return newArr;
}