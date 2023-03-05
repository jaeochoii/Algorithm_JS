function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    for(let i=0; i<num_list.length; i++){
        if(num_list[i] % 2 === 0){
            even += 1;
        }else{
            odd += 1;
        }
    }
    let newArray = [];
    newArray[0] = even;
    newArray[1] = odd;
    return newArray;
}