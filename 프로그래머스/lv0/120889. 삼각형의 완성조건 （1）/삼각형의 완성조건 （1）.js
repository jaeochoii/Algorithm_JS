function solution(sides) {
    sides.sort((a,b)=>b-a);
    if(sides[0] < sides[1] + sides[2]){
        return 1;
    }else{
        return 2;
    }
}