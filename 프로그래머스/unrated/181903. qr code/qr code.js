function solution(q, r, code) {
    let arr = [];
    code = code.split('');
    for(let i=0; i<code.length; i++){
        if(i%q === r)arr.push(code[i]);
    }
    return arr.join('');
}