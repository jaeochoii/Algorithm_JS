function solution(n) {
    let arr = [];
    while(1){
        if(n%2 === 0){
            arr.push(n);
            n = Math.floor(n/2);
            if(n === 1){
                arr.push(1);
                return arr;
            }
        }
        else{
            arr.push(n);
            n = 3*n + 1;
        }
    }
}