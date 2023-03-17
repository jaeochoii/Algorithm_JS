function solution(n, numlist) {
    let newArr = [];
    for(let i=0; i<numlist.length; i++){
        if(numlist[i]%n == 0){
            newArr.push(numlist[i]);
        }
    }
    return newArr;
}