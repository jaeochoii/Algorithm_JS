function solution(babbling) {
    let speak = ["aya", "ye", "woo", "ma"];
    
    for(let i=0; i<babbling.length; i++){
        for(let j=0; j<4; j++){
            if(babbling[i].indexOf(speak[j]+speak[j]) !== -1) break;
            else if(babbling[i].indexOf(speak[j]) !== -1){
                babbling[i] = babbling[i].replace(speak[j], "0");
                j--;
            }
        }
    }
    let cnt = 0;
    for(let i=0; i<babbling.length; i++){
        if(Number(babbling[i])%1 === 0)cnt++;
    }
    return cnt;
}