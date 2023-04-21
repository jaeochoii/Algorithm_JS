function solution(num_list) {
    let arr = [];
    num_list.sort((a,b) => a-b);
    for(let i=0; i<5; i++){
        arr.push(num_list[i]);
    }
    return arr;
}