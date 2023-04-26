function solution(my_string, is_suffix) {
    if(my_string.lastIndexOf(is_suffix) === my_string.length-is_suffix.length){
        return 1;
    }else return 0;
}