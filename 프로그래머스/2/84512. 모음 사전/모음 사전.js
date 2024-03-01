let idx = 0;
const result = {};
const vowels = [..."AEIOU"];

function solution(word) {
  dfs("", 0);
  return result[word];
}

const dfs = (word, length) => {
  if (length > 5) return;
  result[word] = idx++;
  vowels.forEach((vowel) => {
    dfs(word + vowel, length + 1);
  });
};