function solution(cipher, code) {
    let str = "";
    for(let i=code-1; i<cipher.length; i+=code){
        str += cipher[i];
    }
    return str;
}