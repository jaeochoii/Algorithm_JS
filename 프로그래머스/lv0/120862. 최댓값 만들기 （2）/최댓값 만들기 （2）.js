function solution(numbers) {
    let newArr = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            newArr.push(numbers[i] * numbers[j]);
        }
    }
    newArr.sort((a,b) => b-a);
    return newArr[0];
}