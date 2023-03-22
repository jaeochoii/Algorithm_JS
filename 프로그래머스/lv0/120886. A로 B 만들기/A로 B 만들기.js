function solution(before, after) {
    let count = 0;
    const arr = [...before];
    arr.sort();
    const newArr = [...after];
    newArr.sort();
    for(let i=0; i<arr.length; i++){
        if(arr[i] === newArr[i]){
            count++;
        }
    }
    if(count === arr.length){
        return 1;
    }else{
        return 0;
    }
}