function solution(arr, flag) {
    let newArr= [];
    for(let i=0; i<flag.length; i++){
        if(flag[i] === true){
            for(let j=0; j<arr[i] * 2; j++){
                newArr.push(arr[i]);
            }
        }
        else{
            for(let k=0; k<arr[i]; k++){
                newArr.pop();
            }
        }
    }
    return newArr;
}