function solution(s){
    let arr = [...s];
    let count_p = 0;
    let count_y = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "p" || arr[i] === "P"){
            count_p++;
        }
        if(arr[i] === "y" || arr[i] ==="Y"){
            count_y++;
        }
    }
    if(count_p === count_y || count_p === count_y === 0){
        return true;
    }else{
        return false;
    }
}