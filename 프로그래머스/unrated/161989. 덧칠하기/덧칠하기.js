function solution(n, m, section) {
    let max = 0;
    let cnt = 0;
    
    for(let i=0; i<section.length; i++){
        if(section[i] > max){
            cnt++;
            max = section[i] + m - 1;
        }
    }
    return cnt;
}