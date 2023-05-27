function solution(n, words) {
    let storage = [];
    let lastWord;
    let result = [];
    
    for(let i=0; i<words.length; i++){
        if(storage.length === 0){
            lastWord = words[i][words[i].length-1];
            storage.push(words[i]);
        }
        
        else if(words[i][0] === lastWord && storage.indexOf(words[i]) === -1){
            lastWord = words[i][words[i].length-1];
            storage.push(words[i]);
        }
        
        else if(words[i][0] !== lastWord || storage.indexOf(words[i]) !== -1){
            result.push(Math.floor(i%n) + 1);
            result.push(Math.ceil((i+1)/n));
            break;
        }
        
        if(storage.length === words.length){
            result.push(0);
            result.push(0);
        }
    }
    return result;
}