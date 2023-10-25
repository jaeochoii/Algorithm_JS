function solution(picture, k) {
    const willAddArr = []
    for(let i = 0 ; i < picture.length ; i ++) {
        let str = ''
        for(let j = 0 ; j < picture[i].length ; j ++) {
            for(let l=0 ; l < k ; l ++) {
                str+=picture[i][j]    
            }
        }
        willAddArr.push(str)
    }
    
    return willAddArr.reduce((acc, cur) => {
        const curArr = []
        for(let i = 0 ; i < k ; i ++) {
            curArr.push(cur)
        }
        return [...acc, ...curArr]
    }, [])
}