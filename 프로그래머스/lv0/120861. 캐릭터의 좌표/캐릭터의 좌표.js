function solution(keyinput, board) {
    let result = [0,0];
    for(let i=0; i<keyinput.length; i++){
        if(keyinput[i] === "left"){
            if(result[0] <= -1 * Math.floor(board[0]/2)){
                result[0] += 0;
            }else{
                result[0] -= 1;
            }
        }
        else if(keyinput[i] === "right"){
            if(result[0] >= Math.floor(board[0]/2)){
                result[0] += 0;
            }else{
                result[0] += 1;
            }
        }
        else if(keyinput[i] === "up"){
            if(result[1] >= Math.floor(board[1]/2)){
                result[1] += 0;
            }else{
                result[1] += 1;
            }
        }
        else if(keyinput[i] === "down"){
            if(result[1] <= -1 * Math.floor(board[1]/2)){
                result[1] += 0;
            }else{
                result[1] -= 1;
            }
        }
    }
    return result;
}