function solution(array, commands) {
    let result = [];
    for(let i=0; i<commands.length; i++){
        let arr = [];
        arr.push(array.slice(commands[i][0] - 1,commands[i][1]).sort((a,b)=>a-b));
            result.push(arr[0][commands[i][2] - 1]);
    }
        return result;
}