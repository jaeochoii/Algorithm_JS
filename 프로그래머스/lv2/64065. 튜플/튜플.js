function solution(s) {
    s = s.split('');
    let sum = "";
    let arr = [];
    let result = [];
    
    for(let i=1; i<=s.length; i++){
        if(Number(s[i-1])%1 === 0 && s[i] === "}"){
            sum += s[i-1];
            arr.push(sum);
            sum = "";
        }
        
        if(Number(s[i-1])%1 === 0 && Number(s[i])%1 === 0){
            sum += s[i-1];
        }
        
        if(Number(s[i-1])%1 === 0 && s[i] === ","){
            sum += s[i-1];
            arr.push(sum);
            sum = "";
        }
    }
    
    for(let i=0; i<arr.length; i++){
        let cnt = 0;
        if(arr[i] === -1) continue;
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                cnt++;
                arr[j] = -1;
            }
        }
        result[cnt] = Number(arr[i]);
    }
    result.reverse();
    return result;
}