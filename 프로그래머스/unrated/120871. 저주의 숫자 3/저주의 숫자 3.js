function solution(n) {
    let x = 0;
    for(let i=1; i<=n; i++){
        x++;
        while(String(x).includes('3') || x%3 === 0) x++;
    }
    return x;
}