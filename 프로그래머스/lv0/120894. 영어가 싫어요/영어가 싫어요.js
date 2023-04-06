function solution(numbers) {
    let set = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    set.forEach((num, idx) => {
        numbers = numbers.replaceAll(num, idx);
    });
    
    return Number(numbers);
}