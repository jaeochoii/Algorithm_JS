function solution(arr1, arr2) {
    let newArr = [];
    for(let i=0; i<arr1.length; i++){
        let arr = [];
        for(let j=0; j<arr1[i].length; j++){
            arr.push(arr1[i][j] + arr2[i][j]);
        }
        newArr.push(arr);
    }
    return newArr;
}