function solution(s) {
    let arr = [...s];
    let cnt = 0;
    if(arr.length === 4 || arr.length === 6){
        for(let i=0; i<arr.length; i++){
        if(Number(arr[i])%1 === 0){
            cnt++;
            }
        }
        if(cnt === arr.length){
            return true;
        }else return false;
    }else{
        return false;
    }

}