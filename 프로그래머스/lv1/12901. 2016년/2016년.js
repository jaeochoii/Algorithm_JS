function solution(a, b) {
    let date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let result;
    
    if(a === 1 || a === 4 || a === 7){
        result = date[(5 + b - 1)%7];
    }
    else if(a === 2 || a === 8){
        result = date[(1 + b - 1)%7];
    }
    else if(a === 3 || a === 11){
        result = date[(2 + b - 1)%7];
    }
    else if(a === 9 || a === 12){
        result = date[(4 + b - 1)%7];
    }
    else if(a === 6){
        result = date[(3 + b - 1)%7];
    }
    else if(a === 10){
        result = date[(6 + b - 1)%7];
    }
    else if(a === 5){
        result = date[(0 + b - 1)%7];
    }
    
    return result;
}