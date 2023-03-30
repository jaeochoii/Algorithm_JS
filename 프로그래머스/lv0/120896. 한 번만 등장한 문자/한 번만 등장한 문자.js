function solution(s) {
    let arr = [];
    let str = s.split("");
    str.forEach((item) => {
        if(s.indexOf(item) === s.lastIndexOf(item)){
            arr.push(item);
        }
    })
    return arr.sort().join("");
}