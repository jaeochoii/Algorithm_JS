function solution(keymap, targets) {
    let max = 100;
    let cnt = 0;
    let error = 0;
    let result = [];
    
    for(let i=0; i<targets.length; i++){
        for(let j=0; j<targets[i].length; j++){
            for(let k=0; k<keymap.length; k++){
                if(keymap[k].indexOf(targets[i][j]) === -1) error++;
                else if(keymap[k].indexOf(targets[i][j]) < max){
                   max = keymap[k].indexOf(targets[i][j]);
                }
            }
            if(error === keymap.length){
                result.push(-1);
                error = 0;
                break;
            }
            cnt += max+1;
            max = 100;
            error = 0;
        }
        if(result[i] !== -1) result.push(cnt);
        cnt = 0;
    }
    
    return result;
}