function solution(my_string, n) {
    let array = [...my_string];
    let newArr = [];
    for(let i=0; i<array.length; i++){
        newArr[i] = array[i].repeat(n);
    }
    return newArr.join('');
}