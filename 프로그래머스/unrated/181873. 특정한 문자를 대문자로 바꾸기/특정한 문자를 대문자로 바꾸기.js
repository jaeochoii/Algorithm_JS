function solution(my_string, alp) {
    let arr = [...my_string]
    for(let i=0; i<arr.length; i++){
        if(arr[i] === alp){
            arr[i] = alp.toUpperCase();
        }
    }
    return arr.join('');
}