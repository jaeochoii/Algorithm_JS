function solution(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    if(arr1.length > arr2.length) return 1;
    else if(arr1.length < arr2.length) return -1;
    else if(arr1.length === arr2.length){
        arr1.map(v => sum1 += v);
        arr2.map(v => sum2 += v);
        if(sum1 === sum2) return 0;
        else if(sum1 > sum2) return 1;
        else return -1;
    }
}