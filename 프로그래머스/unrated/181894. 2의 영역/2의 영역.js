function solution(arr) {
    let newArr = [];
    if(arr.indexOf(2) === -1) newArr.push(-1);
    else if(arr.indexOf(2) !== arr.lastIndexOf(2)){
        for(let i=arr.indexOf(2); i <= arr.lastIndexOf(2); i++){
            newArr.push(arr[i]);
        }
    }
    else if(arr.indexOf(2) === arr.lastIndexOf(2)){
        newArr.push(2);
    }
    return newArr;
}