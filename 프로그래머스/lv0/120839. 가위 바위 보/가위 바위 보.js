function solution(rsp) {
    let arr = [...rsp];
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "2"){
            newArr[i] = "0";
        }else if(arr[i] === "0"){
            newArr[i] = "5";
        }else if(arr[i] === "5"){
            newArr[i] = "2";
        }
    }
    return newArr.join("");
}