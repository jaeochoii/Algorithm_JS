function solution(survey, choices) {
    let arr = ["R", "T", "C", "F", "J", "M", "A", "N"];
    let score = [0, 0, 0, 0, 0, 0, 0, 0];
    let result = [];
    
    for(let i=0; i<choices.length; i++){
        if(choices[i] > 4){
            score[arr.indexOf(survey[i][1])] += choices[i] - 4;
        }
        else if(choices[i] < 4){
            score[arr.indexOf(survey[i][0])] += 4 - choices[i];
        }
    }
    
    for(let i=0; i<score.length; i+=2){
        if(score[i] >= score[i+1]) result.push(arr[i]);
        else result.push(arr[i+1]);
    }
    
    return result.join('');
}