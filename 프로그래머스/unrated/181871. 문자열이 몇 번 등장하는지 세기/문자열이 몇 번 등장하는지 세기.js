function solution(myString, pat) {
    return [...myString].reduce((acc, cur, idx) => {
        const curStr = myString.slice(idx, pat.length+idx)
        if(curStr === pat) return acc+1
        return acc
    }, 0)
}