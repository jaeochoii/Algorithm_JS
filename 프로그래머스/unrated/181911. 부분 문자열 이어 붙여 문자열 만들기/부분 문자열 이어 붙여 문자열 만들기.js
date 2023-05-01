function solution(my_strings, parts) {
    let string = "";
    for(let i=0; i<parts.length; i++){
        for(let j=parts[i][0]; j<=parts[i][1]; j++){
            string += my_strings[i].split('')[j];
        }
    }
    return string;
}