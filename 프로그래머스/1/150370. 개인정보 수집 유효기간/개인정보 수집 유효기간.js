function solution(today, terms, privacies) {
    // 현재날짜 숫자 배열로 변환하는 작업
    const [Y, M, D] = today.split('.').map(Number);
    
    // terms 객체로 기본 세팅하는 작업
    let setting = [];
    terms.forEach((value) => setting.push(value.split(' ')));
    
    let object = {};
    for(let i = 0; i < setting.length; i += 1) {
        object[setting[i][0]] = Number(setting[i][1]);
    }
    
    let result = [];
    
    for(let i = 0; i < privacies.length; i += 1) {
        let [d, term] = privacies[i].split(' '); // term만 사용
        let [year, month, day] = d.split('.').map(Number); // year, month, day 사용
        
        month += object[term];
        
        if(month > 12) {
            let count = 0;
            
            while(month > 12) {
                month -= 12;
                count += 1;
            }
            
            year += count;
        }
        
        day -= 1;
        if(day === 0) {
            day = 28;
            month -= 1;
        }
        
        if((year < Y) || (year === Y && month < M) || (year === Y && month === M && day < D)) result.push(i+1);
    }    
    return result;
}