function solution(skill, skill_trees) {
    const skillArr = skill.split('');
    let count = 0;
    
    for(let i = 0; i < skill_trees.length; i += 1) {
        let order = Array(skill.length).fill(Infinity);
        const treeArr = skill_trees[i].split('');
        
        for(let j = 0; j < treeArr.length; j += 1) {
            const index = skillArr.indexOf(treeArr[j]);
        
            if(index > -1) order[index] = j;
            else continue;
        }
        let isTrue = true;
        
        for(let j = 0; j < order.length - 1; j += 1) {
            if(order[j] - order[j+1] > 0) {
                isTrue = false;
                break;
            }
        }
        
        if(isTrue) count += 1;
    }
    
    return count;
}