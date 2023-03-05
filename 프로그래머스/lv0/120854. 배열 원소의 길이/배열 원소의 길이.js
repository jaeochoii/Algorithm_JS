function solution(strlist) {
    let newArray = [];
    for(let i=0; i<strlist.length; i++){
        newArray[i]  = strlist[i].length;
    }
    return newArray;
}