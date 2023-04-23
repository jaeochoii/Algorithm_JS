function solution(num_str) {
    let sum = 0;
    let newArr = [...num_str];
    for(let i=0; i<newArr.length; i++){
        sum += Number(newArr[i]);
    }
    return sum;
}