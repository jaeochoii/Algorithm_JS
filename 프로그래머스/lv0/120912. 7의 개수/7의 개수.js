function solution(array) {
    let cnt = 0;
    let str = array.join("");
    let newArr = [...str];
    console.log(newArr);
    for(let i=0; i< newArr.length; i++){
        if(newArr[i] === "7"){
            cnt++;
        }
    }
    return cnt;
}