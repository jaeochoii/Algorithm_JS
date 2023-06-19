function solution(s, skip, index) {
    let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    for(let i=0; i<skip.length; i++){
        alpha.splice(alpha.indexOf(skip[i]),1);
    }
    
    let arr = [];
    for(let i=0; i<s.length; i++){
        let K = (alpha.indexOf(s[i]) + index)%(alpha.length);
        arr.push(alpha[K]);
    }
    return arr.join('');
}