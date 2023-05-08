function solution(str1, str2) {
    // 대소문자 구분을 없애기 위해 모두 소문자로 변환 후 배열로 변환
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // 두개씩 끊어서 새로운 배열에 저장
    let arr1 = [];
    let arr2 = [];
    
    // 공백이나 숫자, 특수 문자가 들어오면 버린다
    for(let i=0; i<str1.length -1; i++){
        arr1.push(str1.substr(i,2));
    }
    for(let i=0; i<str2.length -1; i++){
        arr2.push(str2.substr(i,2));
    }
    // 2개씩 묶은 배열에서 특수문자, 숫자, 공백이 있는 것은 모두 제거한다.
    const regex = /^[a-z]+$/;
    arr1 = arr1.filter(v => typeof v === 'string' && regex.test(v));
    arr2 = arr2.filter(v => typeof v === 'string' && regex.test(v));
    if(arr2.length === 0) return 1*65536;
    
   let sumCnt = arr1.length + arr2.length;
    
    // 배열끼리 비교하면서 교집합과 합집합 개수 찾기
    let cnt = 0;
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                cnt++;
                arr2.splice(j,1);
                j--;
                break;
            }
            else continue;
        }
    }
    
    // (교집합 개수 / 합집합 개수) * 65536 리턴
    return Math.floor((cnt / (sumCnt - cnt)) * 65536);
}