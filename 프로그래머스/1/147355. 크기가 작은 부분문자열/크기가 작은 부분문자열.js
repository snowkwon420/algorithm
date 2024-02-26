function solution(t, p) {
    const pNum = Number(p);
    let count = 0;
    
    for(let i = 0; i<t.length - p.length+1; i++){
        const slicedT = t.slice(i, i+ p.length);
        const tNum = Number(slicedT);
        
        if(tNum <= pNum){
            count += 1;
        }
    }
    var answer = count;
    return answer;
}