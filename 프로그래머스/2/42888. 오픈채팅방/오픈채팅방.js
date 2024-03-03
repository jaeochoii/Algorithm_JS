function solution(record) {
    let map = new Map();
    
    let reInfo = [];
    
    for(let i = 0; i < record.length; i += 1) {
        const [command, id, name] = record[i].split(' ');
        reInfo.push([command, id]);
        
        if(command === 'Change' || command === 'Enter') map.set(id, name);
        
    }
    
    let result = [];
    
    for(let i = 0; i < reInfo.length; i += 1) {
        const [command, id] = reInfo[i];
        const getName = map.get(id);
        
        if(command === 'Enter') result.push(`${getName}님이 들어왔습니다.`);
        
        else if(command === 'Leave') result.push(`${getName}님이 나갔습니다.`);
    }
    
    return result;
}