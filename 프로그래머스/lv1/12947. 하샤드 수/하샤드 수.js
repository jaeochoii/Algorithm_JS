function solution(x) {
    let sum = 0;
    let str = x +"";
    let arr = [...str];
    arr.map(v => sum += Number(v));
    if(x%sum === 0){
        return true;
    }else{
        return false;
    }
}