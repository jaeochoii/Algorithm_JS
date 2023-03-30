function solution(n) {
    let str = "";
    let str1 = "수";
    let str2 = "박";
    for(let i=0; i<n; i++){
        if(i%2 === 0){
            str += str1;
        }else{
            str += str2;
        }
    }
    return str;
}