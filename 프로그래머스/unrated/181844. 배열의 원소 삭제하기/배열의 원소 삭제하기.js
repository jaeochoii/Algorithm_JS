function solution(arr, delete_list) {
    for(let i=0; i<delete_list.length; i++){
        for(let j=0; j<arr.length; j++){
            if(delete_list[i] === arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
}