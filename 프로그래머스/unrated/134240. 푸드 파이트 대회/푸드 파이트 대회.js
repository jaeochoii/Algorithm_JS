function solution(food) {
    let arr = [];
    for(let i=1; i<food.length; i++){
        for(let j=1; j<=Math.floor(food[i]/2); j++){
            arr.push(i);
        }
    }
    let newArr = arr.join("");
    newArr += "0" 
    let reverse = arr.reverse();
    reverse = reverse.join("");
    return newArr + reverse;
}