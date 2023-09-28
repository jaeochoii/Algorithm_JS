function solution(order) {
    const isIceCaffeLatte = (menu) => {
        let iceLatte = ["icecafelatte", "cafelatteice", "cafelatte"];
        if(iceLatte.includes(menu)) return true;
        return false;
    }
    
    const isIceAmericano = (menu) => {
        let iceAmericano = ["iceamericano", "americanoice", "americano", "anything"];
        if(iceAmericano.includes(menu)) return true;
        return false;
    }
    
    const isHotCaffeLatte = (menu) => {
        let hotLatte = ["hotcafelatte", "cafelattehot"];
        if(hotLatte.includes(menu)) return true;
        return false;
    }
    
    const isHotAmericano = (menu) => {
        let hotAmericano = ["hotamericano", "americanohot"];
        if(hotAmericano.includes(menu)) return true;
        return false;
    }
    
    let cost = 0;
    for(let i=0; i<order.length; i++){
        if(isIceCaffeLatte(order[i])) cost += 5000;
        if(isHotCaffeLatte(order[i])) cost += 5000;
        if(isIceAmericano(order[i])) cost += 4500;
        if(isHotAmericano(order[i])) cost += 4500;
    }
    return cost;
}