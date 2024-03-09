function solution(bridge_length, weight, truck_weights) {
    let bridge = Array(bridge_length).fill(0);
    let time = 0;
    
    while(bridge.length) {
        bridge.shift();
        if(truck_weights.length) {
            const sumBridge = bridge.reduce((acc, cur) => acc + cur, 0);
            if(sumBridge + truck_weights[0] <= weight) {
                bridge.push(truck_weights.shift());
            }
            else bridge.push(0);
        }
        time += 1;
    }
    return time;
}