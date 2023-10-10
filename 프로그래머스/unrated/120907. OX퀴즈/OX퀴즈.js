function solution(quiz) {
    let result = [];
    
    quiz.forEach((item) => {
        const math = item.split(' ');
        
        const A = Number(math[0]);
        const B = Number(math[2]);
        
        let mathResult;
        
        if(math[1] === '+') mathResult = A+B;
        if(math[1] === '-') mathResult = A-B;
        
        if(mathResult === Number(math[4])) result.push("O");
        if(mathResult !== Number(math[4])) result.push("X");
    })
    return result;
}