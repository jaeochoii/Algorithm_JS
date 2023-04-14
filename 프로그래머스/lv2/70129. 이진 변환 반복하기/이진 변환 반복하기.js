function solution(s) {
    let result = [0,0];
    while(s.length > 1){
        result[0]++;
        result[1] += (s.match(/0/g) || []).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return result;
}