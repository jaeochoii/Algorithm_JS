function solution(num_list) {
    let sum1 = 0;
    let sum2 = 1;
    if(num_list.length >= 11){
        num_list.map(v => sum1 += v);
        return sum1;
    }else{
        num_list.map(v => sum2 *= v);
        return sum2;
    }
}