function solution(n, arr1, arr2) {
    let resultArr = [];
    
    for(let i=0; i<n; i++){
        let newArr1 = arr1[i].toString(2).padStart(n,'0').split('');
        let newArr2 = arr2[i].toString(2).padStart(n,'0').split('');
        let str = "";
        for(let j=0; j<newArr1.length; j++){
            if(newArr1[j] === "0" && newArr2[j] === "0") str += "0";
            else str += "1";
        }
        str = str.replaceAll("1", "#");
        str = str.replaceAll("0", " ");
        resultArr.push(str);
    }
    return resultArr;
}