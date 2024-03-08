function solution(n, stations, w) {
    let beforeStation = 0;
    let count=0;
    let distance = 0;
    let allWidth = 2*w+1;
    let answer = 0 ;
   for(let i=0;i<=stations.length;i++)
       {
           if(i===stations.length && stations[i-1] + w < n){
                        answer += Math.ceil((n-stations[i-1] -w ) / allWidth);
           }
           else if(i !==stations.length){
           distance = stations[i] - beforeStation -1 -w;

           answer += Math.ceil(distance / allWidth); 
           beforeStation = stations[i]+ w ;
           }
       }

return answer
}