function solution(n, control) {
    let arr = [...control];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "w") n++;
        else if(arr[i] === "s") n--;
        else if(arr[i] === "d") n += 10;
        else if(arr[i] === "a") n -= 10;
    }
    return n;
}