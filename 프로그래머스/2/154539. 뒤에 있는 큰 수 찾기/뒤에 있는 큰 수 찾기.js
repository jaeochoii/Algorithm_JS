function solution(numbers) {
  const answer = Array.from({ length: numbers.length }, () => -1);

  const idxs = [];

  for (let i = 0; i < numbers.length; i++) {
    
    while (idxs.length && numbers[idxs[idxs.length - 1]] < numbers[i]) {

      answer[idxs.pop()] = numbers[i];
    }

    idxs.push(i);
  }
  return answer;
}