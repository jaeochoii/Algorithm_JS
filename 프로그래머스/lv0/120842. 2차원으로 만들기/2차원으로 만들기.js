function solution(num_list, n) {
    let arr = [];
    while(num_list.length > 0){
        let temp;
        temp = num_list.splice(0, n);
        arr.push(temp);
    }
    return arr;
}