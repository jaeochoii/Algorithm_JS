function solution(progresses, speeds) {
    let arr = [];
    // 걸리는 날짜를 다 반영한 배열을 생성
    for(let i=0; i<progresses.length; i++){
        arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    console.log(arr);
    let day = [1];
    let k = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] <= k) day[day.length-1]++;
        else{
            day.push(1);
            k = arr[i];
        }
    }
    return day;
}