function solution(my_string, indices) {
    String.prototype.replaceAt=function(index, character) {

return this.substr(0, index) + character + this.substr(index+character.length); }
    for(let i=0; i<indices.length; i++){
        my_string = my_string.replaceAt(indices[i], " ");
    }
    
    let result = [];
    for(let i=0; i<my_string.length; i++){
        if(my_string[i] !== " ") result.push(my_string[i]);
    }
    
    return result.join("");
}