function solution(myString, pat) {
    let arr = [...myString];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "A") arr[i] = "B";
        else arr[i] = "A";
    }
    let str = arr.join("");
    if(str.indexOf(pat) !== -1){
        return 1;
    }else return 0;
}