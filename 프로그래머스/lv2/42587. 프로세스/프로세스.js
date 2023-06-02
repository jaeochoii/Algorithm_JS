function solution(priorities, location) {
    let stack = []; // 기존 배열의 index를 담은 배열을 하나 생성
    let cnt = 0; // 몇 번째로 나가는지 확인할 수 있는 변수 생성
    let max = Math.max(...priorities); // 배열의 최대값을 구하는 메서드
    
    // 주어진 배열만큼의 인덱스를 담는 배열 생성
    for(let i=0; i<priorities.length; i++){
        stack.push(i);
    }
    
    // 우선순위 큐 실행
    while(priorities.length !== 0){
        if(priorities[0] < max){
            priorities.push(priorities.shift());
            stack.push(stack.shift());
        }
        else{
            cnt++;
            priorities.shift();
            if(stack.shift() === location) return cnt;
            max = Math.max(...priorities);
        }
    }
}

