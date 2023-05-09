function solution(my_string, s, e) {
    let str1 = my_string.split('');
    let arr = [];
    let str = "";
    for(let i=s; i<e+1; i++){
        arr.push(str1[i]);
    }
    arr = arr.reverse().join('');
    
    for(let i=0; i<s; i++){
        str += str1[i];
    }
    
    str += arr;
    
    for(let i=e+1; i<str1.length; i++){
        str += str1[i];
    }
    return str;
    
}