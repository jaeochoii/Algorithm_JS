function solution(slice, n) {
    let pizza = 0;
    if(n%slice === 0){
        pizza = Math.floor(n/slice);
    }else{
        pizza = Math.floor(n/slice + 1);
    }
    return pizza;
}