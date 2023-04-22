function solution(number, n, m) {
    if(number % m === 0 && number % n === 0){
        return 1;
    }else return 0;
}