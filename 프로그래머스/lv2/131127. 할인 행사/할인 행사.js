function solution(want, number, discount) {
    let cnt = 0;
    let succ = 0;
    let result = 0;
    
    for(let i=0; i<discount.length; i++){
        for(let j=0; j<want.length; j++){
            for(let k=i; k<i+10; k++){
                if(want[j] === discount[k]) cnt++;
                else continue;
            }
            
            if(number[j] === cnt){
                succ++;
                cnt = 0;
                continue;
            }
            else{
                cnt = 0;
                break;
            }
        }
        if(succ === number.length){
            result++;
            succ = 0;
        }
        else{
            succ = 0;
            continue;
        }
    }
    return result;
}