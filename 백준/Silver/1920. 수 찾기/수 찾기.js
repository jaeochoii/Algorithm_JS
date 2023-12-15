const fs = require('fs');
const  input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function findNumber(input) {
    let answer = [];

    const compareArr = input[1].split(' ').map(Number).sort((a,b) => a-b); // Parse each element to a number

    input[3].split(' ').forEach((value) => {
        answer.push(binarySearch(compareArr, Number(value)) ? 1 : 0);
    });

    console.log(answer.join('\n'));
}

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length-1;
    let mid;

    while(start<=end){

        mid = Math.floor((start+end)/2);

        if(Number(target) === Number(arr[mid])){
            return true;
        } else{
            if(Number(target) < Number(arr[mid])){
                end = mid-1;
            }
            else{
                start = mid+1;
            }
        }
    }
    return false;
};

findNumber(input);