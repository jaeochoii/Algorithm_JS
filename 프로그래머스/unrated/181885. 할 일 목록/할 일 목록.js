function solution(todo_list, finished) {
    let arr = [];
    for(let i=0; i<todo_list.length; i++){
        if(finished[i] === false) arr.push(todo_list[i]);
    }
    return arr;
}