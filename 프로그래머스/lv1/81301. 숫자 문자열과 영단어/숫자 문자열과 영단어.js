function solution(s) {
    let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i=0; i<arr.length; i++){
        s = s.replaceAll(arr[i],String(i));
    }
    
    return Number(s);
    
}