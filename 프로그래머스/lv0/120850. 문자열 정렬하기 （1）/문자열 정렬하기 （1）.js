function solution(my_string) {
    let regex = /[^0-9]/g;
    let result = my_string.replace(regex, '');
    let newArr = [...result].sort((a,b)=>a-b);
    const arr = newArr.map((i) => Number(i));
    return arr;
}