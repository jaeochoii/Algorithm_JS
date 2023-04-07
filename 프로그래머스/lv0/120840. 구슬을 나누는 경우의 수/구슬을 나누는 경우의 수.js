function solution(balls, share) {
    return factorial(balls) / (factorial(balls-share) * factorial(share));
}

function factorial(n){
    let factorialIn = BigInt(1);
    for(let i=2; i<= n; i++){
        factorialIn *= BigInt(i);
    }
    return factorialIn;
}