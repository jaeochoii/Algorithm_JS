function solution(k, tangerine) {
    let arr = [];
    let cnt = 1;
    let result = 0;
    tangerine = tangerine.sort((a,b) => a-b);
    for(let i=0; i<tangerine.length; i++){
        if(tangerine[i] === tangerine[i+1]){
            cnt++;
        }
        if(tangerine[i] !== tangerine[i+1]){
            arr.push(cnt);
            cnt = 1;
        }
    }
    arr = arr.sort((a,b) => b-a);
    
    for(let i=0; i<arr.length; i++){
        k -= arr[i];
        result++;
        if(k <= 0) return result;
    }
}