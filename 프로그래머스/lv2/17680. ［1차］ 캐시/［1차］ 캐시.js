function solution(cacheSize, cities) {
    cities = cities.map(v => v.toLowerCase());
    let cache = [];
    let time = 0;
    
    for(let i=0; i<cities.length; i++){
        if(cacheSize === 0) time = cities.length * 5;
        
        // 캐시가 빈칸일 때 캐시사이즈가 찰 때까지 push 해주기
        else if(cache.length < cacheSize){
            if(cache.indexOf(cities[i]) !== -1){
                cache.splice(cache.indexOf(cities[i]), 1);
                time += 1;
                cache.push(cities[i]);
            }
            else{
                cache.push(cities[i]);
                time += 5;
            }
        }
        else if(cache.length === cacheSize){
            // 캐시에 도시 이름이 있는 경우 
            if(cache.indexOf(cities[i]) !== -1){
                cache.splice(cache.indexOf(cities[i]), 1);
                time += 1;
                cache.push(cities[i]);
            }
            // 캐시에 도시 이름이 없는 경우
            else if(cache.indexOf(cities[i]) === -1){
                cache.shift();
                time += 5;
                cache.push(cities[i]);
            }
        }
    }
    return time;
}