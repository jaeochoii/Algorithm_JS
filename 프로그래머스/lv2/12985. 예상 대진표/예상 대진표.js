function solution(n,a,b){
    let cnt = 0;
    
    while(Math.ceil(a) !== Math.ceil(b)){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        cnt++;
    }
    return cnt;
}