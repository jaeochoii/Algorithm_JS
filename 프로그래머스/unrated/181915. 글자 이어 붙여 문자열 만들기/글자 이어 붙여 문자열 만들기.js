function solution(my_string, index_list) {
    let arr = [];
    for(let i=0; i<index_list.length; i++){
        arr.push(my_string[index_list[i]]);
    }
    return arr.join('');
}