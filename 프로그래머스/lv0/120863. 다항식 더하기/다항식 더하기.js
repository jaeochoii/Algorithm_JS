function solution(polynomial) {
    let arr = polynomial.split('+');
    let poly = [];
    let constResult = 0;
    
    arr.forEach((v) => {
        if(v.includes("x")) poly.push(v.replace(/x/g, ""));
        else constResult += Number(v);
    })
    
    let polyResult = 0;
    poly.forEach((v) => {
        if(v.includes("") && Number(v) === 0) polyResult += 1
        else polyResult += Number(v);
    })
    
    if(polyResult === 1 && constResult === 0) return "x";
    if(polyResult !== 1 && constResult === 0) return `${polyResult}x`;
    if(polyResult === 0 && constResult !== 0) return `${constResult}`;
    if(polyResult === 1 && constResult !== 0) return `x + ${constResult}`;
    else return `${polyResult}x + ${constResult}`;
}