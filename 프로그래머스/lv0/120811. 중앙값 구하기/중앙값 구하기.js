function solution(array) {
    let i = Math.floor(array.length / 2);
    array.sort((a,b)=>a-b);
    return array[i];
}