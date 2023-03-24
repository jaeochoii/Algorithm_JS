function solution(dots){
    let arr_x = [];
    let arr_y = [];
    dots.forEach(arr => arr_x.push(arr[0]));
    dots.forEach(arr => arr_y.push(arr[1]));
    arr_x.sort();
    arr_y.sort();
    return Math.abs((arr_x[3] - arr_x[0]) * (arr_y[3] - arr_y[0]));
}