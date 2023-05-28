function solution(s, n) {
    let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    s = s.split(''); // 문자열을 배열로 바꿔준다 (index값을 이용할 것이기 때문)
    
    // 배열 원소 하나하나를 n만큼 인덱스 이동하여 바꿔줄 것이다
    for(let i=0; i<s.length; i++){
        // 빈칸은 무시한다
        if(s[i] === " ") continue;
        
        // 대문자인 경우에는 소문자로 바꿔준 후 다시 대문자로 바꿔준다
        else if(s[i] === s[i].toUpperCase()){
            let k = alpha.indexOf(s[i].toLowerCase());
            s[i] = alpha[(k+n)%26].toUpperCase();
        }
        // 소문자인 경우에는 index 값만 찾아서 이동시켜 준다
        else{
            let k = alpha.indexOf(s[i]);
            s[i] = alpha[(k+n)%26];
        }
    }
    return s.join('');
}