function solution(t, p) {
    let arr = [];
    let str = "";
    let cnt = 0;
    
    for(let i=0; i<= t.length - p.length; i++){
        for(let j=0; j<p.length; j++){
          str += t[i+j]          
        }
        arr.push(str);
        str = "";
    }
    
    for(let i=0; i<arr.length; i++){
        if(Number(p) >= Number(arr[i])){
            cnt++;
        }
    }
    return cnt;
}