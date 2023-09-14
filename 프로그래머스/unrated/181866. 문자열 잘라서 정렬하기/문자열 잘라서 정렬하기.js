function solution(myString) {
    let arr = [];
    let word = "";
    
    for(let i=0; i<myString.length; i++){
        if(myString[i] !== "x") word += myString[i];
        if(myString[i] === "x" || i === myString.length -1){
            if(word !== ""){
            arr.push(word);
            word = "";                
            }

        }
    }
    
    return arr.sort();
}