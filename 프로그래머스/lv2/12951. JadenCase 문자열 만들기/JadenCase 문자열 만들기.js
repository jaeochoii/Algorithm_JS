function solution(s){
    let arr = s.split(" ");
    let newArr = arr.map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
    return newArr.join(" ");
}