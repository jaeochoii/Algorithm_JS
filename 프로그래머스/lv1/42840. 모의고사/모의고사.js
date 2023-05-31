function solution(answers) {
    // 수포자 1, 2, 3의 패턴이 담긴 배열 생성
    let N1 = [1,2,3,4,5];
    let N2 = [2,1,2,3,2,4,2,5];
    let N3 = [3,3,1,1,2,2,4,4,5,5];
    
    // 수포자 1, 2, 3의 정답 카운트를 담을 변수 생성
    let cnt1 = 0;
    let cnt2 = 0;
    let cnt3 = 0;
    
    // 배열의 원소를 하나하나 비교해서 정답 카운트를 Update
    for(let i=0; i<answers.length; i++){
        if(answers[i] === N1[i%5]) cnt1++;
        if(answers[i] === N2[i%8]) cnt2++;
        if(answers[i] === N3[i%10]) cnt3++;
    }
    
    // 카운트가 가장 많은 수포자를 배열에 넣어서 리턴 
    let arr = [cnt1, cnt2, cnt3];
    let result = [];
    let k = -1;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] > k){
            result = [];
            result.push(i+1);
            k = arr[i];
        }
        else if(arr[i] === k){
            result.push(i+1);
        }
        continue;
    }
    return result;
}