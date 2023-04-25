function solution(myString, pat) {
    if(myString.toLowerCase().includes(pat.toLowerCase()) === true){
        return 1;
    }else return 0;
}