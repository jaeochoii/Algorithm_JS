function solution(myStr) {
    let resultArr = [];
    let letterArr = myStr.split("");
    let str = "";
    for(let i=0; i<letterArr.length; i++){
        let char = letterArr[i];
        if(char === "a" || char === "b" || char === "c"){
            if(str !== ""){
                resultArr.push(str);
                str = "";
                continue;
            }
            else continue;
        }
        str += char;
    }
    resultArr.push(str);
    if(resultArr[0] === "") return ["EMPTY"];
    return resultArr;
}