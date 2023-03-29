function solution(arr) {
    if(arr.length <= 1){
        return [-1];
    }else{
        let min = Math.min(...arr);
        let idx = arr.indexOf(min);
        arr.splice(idx,1);
        return arr;
    }
}