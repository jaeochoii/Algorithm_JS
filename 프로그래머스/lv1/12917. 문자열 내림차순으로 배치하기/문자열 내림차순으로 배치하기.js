function solution(s) {
    let arr = [...s];
    let arrBig =[];
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] === arr[i].toUpperCase()){
            arrBig.push(arr[i]);
        }
        else{
            newArr.push(arr[i]);
        }
    }
    newArr.sort().reverse();
    let str = arrBig.sort().reverse().join("");
    newArr.push(str);
    let str2 = newArr.join("");
    return str2;
}