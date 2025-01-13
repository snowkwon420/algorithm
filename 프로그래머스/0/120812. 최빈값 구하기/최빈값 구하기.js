function solution(array) {
    var answer = {};
    for(var i of array){
        if(answer[i]) answer[i] += 1;
        else answer[i] = 1;
    }
    
    var filter = Object.keys(answer).filter((e) => answer[e] === Object.values(answer).sort((a, b)=> b - a)[0]);

    return filter.length != 1 ? -1 : Number(filter[0]);
}