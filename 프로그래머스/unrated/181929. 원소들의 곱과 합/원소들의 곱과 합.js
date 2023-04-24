function solution(num_list) {
    let sol1 = 1;
    let sol2 = 0;
    num_list.map(v => sol1 *= v);
    num_list.map(v => sol2 += v);
    if(sol1 > sol2 * sol2){
        return 0;
    }else return 1;
    
}