function solution(arr, queries) {
    for(let i=0; i<queries.length; i++){
        for(let j=queries[i][0]; j <= queries[i][1]; j++){
            arr[j] += 1;
        }
    }
    return arr;
}