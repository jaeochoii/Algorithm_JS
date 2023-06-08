function solution(arr1, arr2) {
    let result = [];
    let arr = [];
    let sum = 0;
    
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2[0].length; j++){
            sum = 0;
            for(let k=0; k<arr2.length; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            arr.push(sum);
        }
        result.push(arr);
        arr = [];
    }
    return result;
}