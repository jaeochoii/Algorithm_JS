function solution(my_str, n) {
    let newStr = my_str.split("");
    let newArr = [];
    while(newStr.length >0){
        newArr.push(newStr.splice(0,n).join(""));
    }
    return newArr;
    
}