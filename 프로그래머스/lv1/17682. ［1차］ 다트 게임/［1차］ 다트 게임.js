function solution(dartResult) {
    let arr = []; // 던진 횟수에 따라서 배열로 나누기
    let dart = []; // 2차원 배열을 생성하여 던진 횟수에 따라 분리
    
    // 던진 횟수에 따라 1차, 2차, 3차로 나누어 분리하기
    for(let i=0; i<dartResult.length; i++){
        if(dartResult[i] === "1" && dartResult[i+1] === "0"){
            arr.push('10');
            i += 1;  
        }
        else if(Number(dartResult[i+1])%1 === 0 || i === dartResult.length-1){
            arr.push(dartResult[i]);
            dart.push(arr);
            arr = [];
        }
        else arr.push(dartResult[i]);
    }
    
    let sum = 0;
    let newArr = [];
    
    for(let i=0; i<3; i++){
        if(dart[i][1] === "S") newArr.push(Number(dart[i][0]) ** 1);
        else if(dart[i][1] === "D") newArr.push(Number(dart[i][0]) ** 2);
        else if(dart[i][1] === "T") newArr.push(Number(dart[i][0]) ** 3);
    }
    
    for(let i=0; i<3; i++){
        if(dart[i][2] === "*" && i === 0) newArr[0] = newArr[0]*2;
        else if(dart[i][2] === "*" && i !== 0){
            newArr[i] = newArr[i]*2;
            newArr[i-1] = newArr[i-1]*2;
        }
        else if(dart[i][2] === "#") newArr[i] = newArr[i] * -1;
    }
    
    for(let i=0; i<3; i++){
        sum += newArr[i];
    }
    
    return sum;
}