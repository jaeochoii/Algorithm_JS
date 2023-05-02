function solution(num_list, n) {
    let arr = [];
    for(let i=n; i<num_list.length; i++){
        arr.push(num_list[i]);
    }
    for(let i=0; i<n; i++){
        arr.push(num_list[i]);
    }
    return arr;
}