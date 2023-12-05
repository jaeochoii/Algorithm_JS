function solution(bandage, health, attacks) {
    let isDead = false;
    let hp = health;
    let timing = 0;
    
    attacks.forEach(([a_timing, damage]) => {
        let duration = a_timing - timing - 1;
        let nextHp = hp + (duration * bandage[1] 
                    + (Math.floor(duration / bandage[0]) * bandage[2]));

        timing = a_timing;
        
        hp = nextHp > health ? health : nextHp;
        hp -= damage;
        
        if (hp < 1) isDead = true;
    })
    
    return isDead ? -1 : hp;
}