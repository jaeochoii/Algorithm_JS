function solution(my_string) {
    let arr = [];
    let str = my_string.split(' ');
    for(let i=0; i<str.length; i++){
        if(str[i] === '') continue;
        else arr.push(str[i]);
    }
    return arr;
}