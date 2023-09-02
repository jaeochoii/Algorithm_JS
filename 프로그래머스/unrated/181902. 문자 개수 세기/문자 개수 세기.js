function solution(my_string) {
    let alphabetArray = Array(52).fill(0);
    let alphabet = my_string;
    for(let i=0; i<alphabet.length; i++){
        if(alphabet[i] === alphabet[i].toUpperCase()){
            alphabetArray[alphabet[i].charCodeAt(0)-65] += 1;  
        }
        else alphabetArray[alphabet[i].charCodeAt(0)-71] += 1
    }
    return alphabetArray;
}