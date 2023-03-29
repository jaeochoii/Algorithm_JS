function solution(phone_number) {
    let newArr = [];
    let arr = [...phone_number];
    for(let i=0; i<arr.length -4; i++){
        arr[i] = "*";
        newArr.push(arr[i]);
    }
    for(let i=arr.length-4; i<arr.length; i++){
        newArr.push(arr[i]);
    }
    let str = newArr.join("");
    return str;
}