function solution(strings, n) {
    let alpha = [];
    let words = [];
    strings = strings.sort();
    
    for(let i=0; i<strings.length; i++){
        alpha.push(strings[i][n]);
    }
    alpha = alpha.sort();
    
    for(let i=0; i<alpha.length; i++){
        for(let j=0; j<strings.length; j++){
            if(strings[j][n] === alpha[i]){
                words.push(strings[j]);
                strings.splice(j,1);
                j--;
            }
        }
    }
    return words;
}