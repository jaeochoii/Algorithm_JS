function solution(num_list) {
    let sumOdd = 0;
    let sumEven = 0;
    
    for(let i=0; i<num_list.length; i++){
        if(i%2 === 0) sumEven += num_list[i];
        else sumOdd += num_list[i];
    }
    if(sumOdd > sumEven) return sumOdd;
    return sumEven;
}