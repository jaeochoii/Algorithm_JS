function solution(name, yearning, photo) {
    let info = {};
    let sum = 0;
    for(let i=0; i<name.length; i++){
        info[name[i]] = yearning[i];
    }
    let arr = [];
    for(let i=0; i<photo.length; i++){
        for(let j=0; j<photo[i].length; j++){
            if(info[photo[i][j]]) sum += info[photo[i][j]];
        }
        arr.push(sum);
        sum = 0;
    }
    return arr;
}