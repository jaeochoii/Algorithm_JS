function solution(n, t) {
    let animal = n;
    for(let i=0; i<t; i++){
        animal = animal * 2;
    }
    return animal;
}