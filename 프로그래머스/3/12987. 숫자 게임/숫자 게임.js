function solution(A, B) {
    A.sort((a,b) => a-b);
    B.sort((a,b) => a-b);
    
    let count = 0;
    let a1 = 0;
    let b1 = 0;
    
    while(b1 <= B.length-1) {
        if(B[b1] > A[a1]) {
            count += 1;
            a1 += 1;
            b1 += 1;
        }
        
        else b1 += 1;
    }
    
    return count;
}