function solution(age) {
    age = String(age);
    let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let newArr = [...age];
    let str = [];
    for(let i=0; i<newArr.length; i++){
        str.push(arr[Number(newArr[i])]);
    }
    return str.join("");
}