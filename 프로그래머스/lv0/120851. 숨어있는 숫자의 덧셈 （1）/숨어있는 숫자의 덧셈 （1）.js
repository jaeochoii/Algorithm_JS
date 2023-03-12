function solution(my_string){
    let regex = /[^0-9]/g;
    let result = my_string.replace(regex, "");
    let count = 0;
    let newArr = [...result];
    for(let i=0; i<newArr.length; i++){
        count = count + Number(newArr[i]);
    }
    return count;
}