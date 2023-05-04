function solution(names) {
    let arr = [];
    for(let i=0; i<names.length; i++){
        if(i%5 === 0) arr.push(names[i]);
    }
    return arr;
}