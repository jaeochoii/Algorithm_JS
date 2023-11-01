function solution(numlist, n) {
    let result = []
    result = numlist.sort((a, b) => {
        const [numA, numB] = [Math.abs(a - n), Math.abs(b - n)];
        if(numA === numB){
            return b - a;
        }
        return numA - numB;
    })
    return result;
}