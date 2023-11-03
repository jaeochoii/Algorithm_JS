function solution(l, r) {
    var answer = [];
    for(let i=l;i<=r;i++){
        let arr=String(i)
        if(![...arr].every(x=>x==='5'||x==='0'))continue;
        answer.push(i)
        
    }
    return answer.length? answer:[-1];
}