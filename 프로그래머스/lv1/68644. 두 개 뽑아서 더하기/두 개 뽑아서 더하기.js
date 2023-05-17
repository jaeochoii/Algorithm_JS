function solution(numbers) {
    let arr = [];
    for(let i=0; i<numbers.length -1; i++){
        for(let j=i+1; j<numbers.length; j++){
            arr.push(numbers[i] + numbers[j]);
        }
    }
    arr.sort((a,b) => a-b);
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        if(newArr[newArr.length-1] !== arr[i]) newArr.push(arr[i]);
        else continue;
    }
    return newArr;
}