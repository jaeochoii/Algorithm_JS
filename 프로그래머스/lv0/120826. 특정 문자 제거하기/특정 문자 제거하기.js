function solution(my_string, letter) {
    new_string = my_string.replaceAll(letter, "");
    return new_string;
}