function solution(num_list, n) {
    let arr = [];
    for(let i=0; i<num_list.length; i+=n){
        arr.push(num_list[i]);
    }
    return arr;
}