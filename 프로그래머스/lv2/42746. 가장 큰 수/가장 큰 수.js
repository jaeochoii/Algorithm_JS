function solution(numbers) {
    for(let i=0; i<numbers.length; i++){
        numbers[i] = String(numbers[i]);
    }
    numbers = numbers.sort((a,b) => (b+a) - (a+b));
    
    if(numbers[0] === "0") return "0";
    else return numbers.join('');
}