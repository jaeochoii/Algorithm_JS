function solution(sizes) {
    let min = 0;
    let max = 0;
    for(let i=0; i<sizes.length; i++){
        sizes[i].sort((a,b) => a-b);
    }
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][0] > min) min = sizes[i][0];
    }
    for(let i=0; i<sizes.length; i++){
        if(sizes[i][1] > max) max = sizes[i][1];
    }
    
    return max * min;
}