function solution(my_string, m, c) {
    let arr = [];
    let newArr = [];
    let str = "";
    for(let i=0; i<my_string.length; i++){
        str += my_string[i];
        if(str.length === m){
            arr.push(str);
            str = "";
        }
    }
    
    for(let i=0; i<arr.length; i++){
        newArr.push(arr[i][c-1]);
    }
    return newArr.join('');
}