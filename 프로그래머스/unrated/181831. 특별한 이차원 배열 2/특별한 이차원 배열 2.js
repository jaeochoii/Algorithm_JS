function solution(arr) {
    let cnt = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] === arr[j][i]) cnt++;
        }
    }
    if(cnt === arr.length * arr.length) return 1;
    return 0;
}