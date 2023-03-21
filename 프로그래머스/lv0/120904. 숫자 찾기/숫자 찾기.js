function solution(num, k) {
    let str = String(num);
    let count = 0;
    let arr = [...str];
    for(let i=0; i<arr.length; i++){
        if(Number(arr[i]) === k){
            return i+1;
        }
        count++;
    }
    if(count === arr.length){
        return -1;
    }
}