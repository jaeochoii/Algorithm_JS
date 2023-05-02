function solution(n_str) {
    let arr = [...n_str];
    let newArr = [];
    let k;
    for(let i=0; i<arr.length; i++){
        if(arr[i] === '0') continue;
        if(arr[i] !== '0'){
            k = i;
            break;
        }
    }
        
    for(let j=k; j<arr.length; j++){
        newArr.push(arr[j]);
    }
    return newArr.join('');
}