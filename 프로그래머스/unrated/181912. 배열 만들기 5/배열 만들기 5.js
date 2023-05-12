function solution(intStrs, k, s, l) {
    let arr = [];
    for(let i=0; i<intStrs.length; i++){
        if(Number(intStrs[i].substr(s,l)) > k) arr.push((Number(intStrs[i].substr(s,l))));
    }
    return arr;
}