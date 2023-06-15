function solution(n, k) {
    let str = n.toString(k);
    let num = "";
    let arr = [];
    let result = 0;
    
    for(let i=0; i<str.length; i++){
        if(str[i] !== "0") num += str[i];
        else if(str[i] === "0"){
            if(num !== "") arr.push(num);
            else continue;
            num = "";
        }
    }
    arr.push(num);
    
    let cnt;
    for(let i=0; i<arr.length; i++){
        cnt = 0;
        if(arr[i] === "1") continue;
        for(let j=1; j<=Math.floor(Math.sqrt(Number(arr[i]))); j++){
            if(arr[i]%j === 0) cnt++;
        }
        if(cnt === 1) result++;
    }
    return result;
}