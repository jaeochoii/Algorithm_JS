function solution(id_pw, db) {
    let arrID = [];
    let arrPW = [];
    for(let i=0; i<db.length; i++){
        arrID.push(db[i][0]);
        arrPW.push(db[i][1]);
    }
    for(let i=0; i<arrID.length; i++){
        if(id_pw[0] === arrID[i]){
            if(id_pw[1] === arrPW[i]){
                return "login";
            }
            else return "wrong pw";
        }
    }
    return "fail";
}