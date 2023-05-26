function solution(citations) {
    citations = citations.sort((a,b) => a-b);
    let max = 0;
    let k;
    
    for(let i=0; i<=citations[citations.length-1]; i++){
        for(let j=0; j<citations.length; j++){
            if(i <= citations[j]){
                max = citations.length - j;
                if(max >= i) k = i;
                break;
            }
        }
    }
    return k;    
}