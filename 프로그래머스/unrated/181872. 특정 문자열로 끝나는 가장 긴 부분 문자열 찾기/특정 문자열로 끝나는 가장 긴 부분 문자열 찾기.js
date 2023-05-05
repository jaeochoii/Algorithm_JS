function solution(myString, pat) {
    let idx = myString.lastIndexOf(pat);
    return myString.substr(0,idx + pat.length);
}