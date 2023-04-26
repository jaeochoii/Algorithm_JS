function solution(num_list) {
    let str1 = "";
    let str2 = "";
    for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2 !== 0){
            str1 += String(num_list[i]);
        }
        else{
            str2 += String(num_list[i]);
        }
    }
    return Number(str1) + Number(str2);
}