function solution(spell, dic) {
    return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}