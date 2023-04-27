function solution(myString) {
    let arr = [...myString];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "a") arr[i] = "A";
        else if(arr[i] === "A") arr[i] = "A";
        else arr[i] = arr[i].toLowerCase();
    }
    return arr.join("");
}