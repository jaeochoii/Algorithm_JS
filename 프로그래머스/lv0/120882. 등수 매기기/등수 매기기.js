function solution(score) {
    let average = score.map(v => (v[0] + v[1])/2);
    let sorted = average.slice().sort((a,b) => b-a);
    return average.map(v => sorted.indexOf(v)+1);
}