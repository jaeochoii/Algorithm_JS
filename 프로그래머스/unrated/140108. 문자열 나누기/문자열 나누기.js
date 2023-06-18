function solution(s) {
    s = s.split('');
    let cnt = 0;
    let index = 0;
    let result = 0;
    let compare = s[0];
    
    while(s.length !== 0){
        if(s[index] === compare){
            cnt++;
            if(cnt === 0){
                s.splice(0,index+1);
                result++;
                compare = s[0];
                index = 0;
                cnt = 0;
            }
            else index++;
        }
        else {
            cnt--;
            if(cnt === 0){
                s.splice(0, index+1);
                result++;
                compare = s[0];
                index = 0;
                cnt = 0;
            }
            else index++;
        }
    }
    return result;
}