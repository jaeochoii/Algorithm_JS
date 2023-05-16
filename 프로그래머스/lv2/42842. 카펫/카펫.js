function solution(brown, yellow) {
    let arr = [];
    let newArr = [];
    // yellow의 인수 구하기
    for(let i=1; i<= Math.sqrt(yellow); i++){
        if(yellow%i === 0){
            arr.push(i);
            arr.push(yellow/i);
            newArr.push(arr);
            arr = [];
        }
    }
    for(let i=0; i<newArr.length; i++){
        if((newArr[i][0] + 2 ) * (newArr[i][1] + 2) - yellow === brown)         {
            return [newArr[i][1] + 2, newArr[i][0] + 2];
        }
    }
}