function solution(i, j, k) {
    let arr = [];
    for(let l=i; l<j+1; l++){
        arr.push(l);
    }
    let str = arr.join("");
    let newArr = [...str];
    let cnt = 0;
    for(let i=0; i<newArr.length; i++){
        if(Number(newArr[i]) === k){
            cnt++;
        }
    }
    return cnt;
}