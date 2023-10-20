function solution(my_string, queries) {
    queries.forEach(a => {
        const copyArr = [...my_string]
        const [from, to] = a
        const slicedText = copyArr.slice(from, to+1)
        const reversedSlice = slicedText.reverse().join("")
        copyArr.splice(from, to-from+1, reversedSlice)
        my_string = copyArr.join("")
    })
    return my_string
}