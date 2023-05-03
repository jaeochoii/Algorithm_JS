function solution(n) {
    let str = [...n.toString(2)];
    let cnt = 0;
    for(let i=0; i<str.length; i++){
        if(str[i] === "1") cnt++;
    }
    
    for(let i=n+1; ;i++){
        let count = 0;
        let arr = [...i.toString(2)];
        for(let j=0; j<arr.length; j++){
            if(arr[j] === "1") count++;
        }
        if(cnt === count) return i;
    }
}