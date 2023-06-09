function solution(number, limit, power) {
    let arr = [];
    let sum = 0;
    
    // number 이하의 수의 약수의 개수를 담은 배열 생성
    for(let i=1; i<=number; i++){
        let cnt = 0;
        for(let j=1; j<=Math.sqrt(i); j++){
            if(i%j === 0) cnt++;
        }
        if(Math.sqrt(i) === Math.floor(Math.sqrt(i))) arr.push(2*cnt -1);
        else arr.push(2 * cnt);
    }
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > limit) sum += power;
        else sum += arr[i];
    }
    
    return sum;
}